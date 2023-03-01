import { useState } from "react";
import Text from "./Text";

function TextToSpeech(){

    const msg = new SpeechSynthesisUtterance();

    const speechHandler = (msg) => {
      msg.text = Text();
      window.speechSynthesis.speak(msg);
    };

    return (
      <div className="">
        <button onClick={() => speechHandler(msg)}>SPEAK</button>
      </div>
    );

}

export default TextToSpeech;