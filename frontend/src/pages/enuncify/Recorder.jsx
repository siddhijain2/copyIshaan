import React, { useState } from "react";
import { ReactMic } from "react-mic";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import axios from "axios";
var result = "";
function Recorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [blobObject, setBlobObject] = useState(null);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startRecording = () => {
    setIsRecording(true);
    SpeechRecognition.startListening();
  };

  const stopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setBlobObject(recordedBlob);
    sendAudioData(recordedBlob.blob);
  };

  const sendAudioData = async (blob) => {
    const formData = new FormData();
    formData.append('audio_file', blob, "audio.wav");
    const response = await axios
      .post("Enuncify/", formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
    console.log("Emotion recognition result:", response.data);
    result = response.data;
  };

  return (
    <div>
      <h2>Recorder</h2>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        mimeType="audio/wav"
      />
      {blobObject && (
        <audio controls>
          <source src={blobObject.blobURL} type="audio/wav" />
        </audio>
      )}
      <h2>Transcript</h2>
      <p>{transcript}</p>
      <p>{result}</p>
    </div>
  );
}

export default Recorder;
