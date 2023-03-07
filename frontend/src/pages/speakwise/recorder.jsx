import { useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import { flu_advanced, flu_beginner, flu_intermediate } from "../../assets";

const Recorder = () => {
  // const [recordingTime, setRecordingTime] = useState(-1);
  const recorderControls = useAudioRecorder();
  const [fluency, setFluency] = useState(-1);
  // useEffect(() => {
  //   setRecordingTime(recorderControls.recordingTime);
  // });

  const addAudioElement = async (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    console.log("file: ", audio);

    const fd = new FormData();
    fd.append("audio_file", blob, "filename.mp3");
    var response = await axios.post("speakwise/", fd, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    setFluency(response.data);

    console.log(recorderControls);
    console.log(response);
  };

  return (
    <>
      <div>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
        <button onClick={recorderControls.stopRecording}>Stop recording</button>
      </div>
      {/* {recordingTime} */}
      {fluency === 0 ? (
        <img src={flu_beginner} />
      ) : fluency === 1 ? (
        <img src={flu_intermediate} />
      ) : fluency === 2 ? (
        <img src={flu_advanced} />
      ) : (
        <div> Record audio to get fluency</div>
      )}
    </>
  );
};

export default Recorder;
