import _ from "lodash";
import hark from "hark";
import log from "loglevel";
import axios from "axios";

let speechRecognizer;
let waitingForResultTimeout;
let waitingForActivityTimeout;
let audioStream;
let audioStreamSpeechEvents;
let speaking;
let mediaRecorder;
let chunks = [];
let stopped = false;
let response;

const defaultConfig = {
  onRestarting: () => {},
  onRecording: () => {},
  onSpeech: () => {},
  onError: () => {},
  onStart: () => {},
  onStop: () => {},
  lang: "en-IN",
  continuous: true,
  interimResults: true,
  maxAlternatives: 10,
};

let currentConfig = defaultConfig;

function clearAllTimeouts() {
  clearTimeout(waitingForResultTimeout);
  clearTimeout(waitingForActivityTimeout);
}

function abortSpeechRecognizer() {
  clearAllTimeouts();
  speechRecognizer.abort();
  log.info("abortSpeechRecognizer");
  currentConfig.onStop();
}

function stopSpeechRecognizer() {
  clearAllTimeouts();
  speechRecognizer.stop();
  log.info("stopSpeechRecognizer");
  currentConfig.onStop();
}

function delayedStartSpeechRecognizer() {
  try {
    _.defer(startSpeechRecognizer);
  } catch (error) {
    delayedStartSpeechRecognizer();
  }
}

function stopSpeakRecognizer() {
  if (audioStream && audioStream.getTracks) {
    audioStream.getTracks().forEach((track) => track.stop());
    audioStreamSpeechEvents.stop();
  }
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
}

function handleOnEnd() {
  log.info("handleOnEnd");
  clearAllTimeouts();
  currentConfig.onStop();
  log.info("handleOnEnd", "restarting");
  if (!stopped) {
    currentConfig.onRestarting();
    delayedStartSpeechRecognizer();
  }
}

function handleOnStart() {
  log.info("handleOnStart");
  currentConfig.onRecording();
}

function handleResult(result) {
  if (!result || !result.results) {
    return;
  }

  const recognition = result.results[result.resultIndex];
  const text = _.map(recognition, (text) => ({
    confidence: text.confidence,
    text: text.transcript,
  }));
  log.info("handleResult");
  currentConfig.onSpeech({
    final: recognition.isFinal,
    text,
  });
  updateHandleResultTimeout(text, recognition.isFinal);
}

function updateHandleResultTimeout(text, isFinal) {
  clearTimeout(waitingForResultTimeout);
  if (!isFinal) {
    waitingForResultTimeout = setTimeout(() => {
      log.error("result timeout");
      currentConfig.onSpeech({
        final: true,
        text,
      });
      abortSpeechRecognizer();
    }, 2000);
  }
}

function handleError(event) {
  log.info("handleError", event.error);
  currentConfig.onError();
}

function handleWaitingForActivityTimeout() {
  if (!speaking) {
    abortSpeechRecognizer();
  }
}

function handleAudioStream(stream) {
  audioStream = stream;
  audioStreamSpeechEvents = hark(audioStream, {
    interval: 200,
  });
  audioStreamSpeechEvents.on("speaking", () => {
    speaking = true;
    log.info("speaking");
  });
  audioStreamSpeechEvents.on("stopped_speaking", () => {
    speaking = false;
    clearTimeout(waitingForActivityTimeout);
    waitingForActivityTimeout = setTimeout(
      handleWaitingForActivityTimeout,
      5000
    );
    log.info("stopped_speaking");
  });
  const options = { mimeType: "audio/webm" };
  mediaRecorder = new MediaRecorder(stream, options);
  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };
  mediaRecorder.onstop = () => {
    console.log("Media Recorder Stopping");
    const blob = new Blob(chunks, { type: "audio/webm" });
    sendAudioStream(blob);
  };
  console.log("Media Recorder started")
  mediaRecorder.start();
  
}

function startSpeakRecognizer() {
  if (window.navigator && window.navigator.mediaDevices) {
    window.navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: false,
      })
      .then(handleAudioStream)
      .catch((err) => log.error(err));
  }
}

function startSpeechRecognizer() {
  log.info("startSpeechRecognizer");
  currentConfig.onStart();
  try {
    speechRecognizer.start();
  } catch (err) {
    log.error(err);
  }
}
const sendAudioStream = async (blob) => {
  const formData = new FormData();
  console.log("Blob", blob);
  formData.append("audio_file", blob, "audio.webm");
  console.log("Form Data ", formData);

  response = await axios
    .post("Enuncify/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // handle response from backend
      console.log("Detected Emotion ---> ",response.data);
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
};

function initSpeechRecognition({
  lang,
  continuous,
  interimResults,
  maxAlternatives,
}) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    speechRecognizer = new SpeechRecognition();
    speechRecognizer.continuous = continuous;
    speechRecognizer.lang = lang;
    speechRecognizer.interimResults = interimResults;
    speechRecognizer.maxAlternatives = maxAlternatives;

    speechRecognizer.onstart = handleOnStart;
    speechRecognizer.onresult = handleResult;
    speechRecognizer.onerror = handleError;
    speechRecognizer.onend = handleOnEnd;
    return speechRecognizer;
  }
}

export function init(config) {
  const updatedConfig = {
    ...defaultConfig,
    ...config,
  };
  currentConfig = updatedConfig;
  return initSpeechRecognition(updatedConfig);
}

export function start() {
  stopped = false;
  startSpeakRecognizer();
  startSpeechRecognizer();
}

export function stop() {
  stopped = true;
  clearAllTimeouts();
  stopSpeakRecognizer();
  stopSpeechRecognizer();
}

export function emotion(){
  if(response)
    return <div>{response.data}</div>
}