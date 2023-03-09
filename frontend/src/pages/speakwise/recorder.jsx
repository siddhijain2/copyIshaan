import { useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import { flu_advanced, flu_beginner, flu_intermediate } from "../../assets";
import { NavLink, useNavigate } from "react-router-dom";


const Recorder = () => {
  const [recordingTime, setRecordingTime] = useState(-1);
  const recorderControls = useAudioRecorder();
  const [fluency, setFluency] = useState(-1);
    const navigate = useNavigate();


  useEffect(() => {
    if (recorderControls.recordingTime > recordingTime)
      setRecordingTime(recorderControls.recordingTime);
  });

  var words = localStorage.getItem("totalwords");

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
    localStorage.setItem("fluency", response.data);
    var wpm = (words * 60) / recordingTime;
        localStorage.setItem("wpm", wpm);

    console.log(response);
    navigate("/speakwise/result");
  };

  return (
    <>
      <div>
        <AudioRecorder
          onRecordingComplete={(blob) => addAudioElement(blob)}
          recorderControls={recorderControls}
        />
      </div>
      Total time= {recordingTime}
      {/* {fluency === 0 ? (
        <>
          <img
            src={flu_beginner}
            width="50%"
            height="auto"
            class="flex items-center justify-center"
          />
          <div>Words per minute = {(words * 60) / recordingTime}</div>
        </>
      ) : fluency === 1 ? (
        <>
          <img
            src={flu_intermediate}
            width="50%"
            height="auto"
            class="flex items-center justify-center"
          />
          Words per minute = {(words * 60) / recordingTime}
        </>
      ) : fluency === 2 ? (
        <>
          <img
            src={flu_advanced}
            width="50%"
            height="auto"
            class="flex items-center justify-center"
          />
          Words per minute = {(words * 60) / recordingTime}
        </>
      ) : (
        <div> Record audio to get fluency</div>
      )} */}
    </>
  );
};

export default Recorder;
