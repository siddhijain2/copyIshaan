import { useState } from "react";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { shadows } from '@material-ui/system';

function TextToSpeech({word}){
    console.log("Text To Speech called")
    const msg = new SpeechSynthesisUtterance();

    const speechHandler = (msg) => {
      msg.text = word;
      window.speechSynthesis.speak(msg);
    };

    return (
      <div className="">
        <PlayCircleFilledWhiteIcon onClick={() => speechHandler(msg)} style={{ color: "#EF846B",fontSize: 60,boxShadow:3 }}/>
      </div>
    );

}

export default TextToSpeech;
