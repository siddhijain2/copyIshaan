import { useState, useEffect } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";

const Recorder = () => {
  const [recordingTime, setRecordingTime] = useState(-1);
  const recorderControls = useAudioRecorder();

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
    </>
  );
};

export default Recorder;
