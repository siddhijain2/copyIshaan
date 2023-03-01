import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";

const Recorder = () => {
  const recorderControls = useAudioRecorder();
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

    console.log(response);
    // this.setState({
    //   prediction: response.data,
    //   predictionProgress: "",
    // });
    console.log("hi");
    document.body.appendChild(audio);
  };
  const [recording, setRecording] = useState();

  return (
    <div>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      {/* <button onClick={recorderControls.stopRecording}>Stop recording</button> */}
    </div>
  );
};

export default Recorder;
