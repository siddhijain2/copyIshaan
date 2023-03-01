import TextToSpeech from "./TextToSpeech.js";
import Text from "./Text.js";
import Recorder from "./Recorder.jsx";
import ThemePage from "./themePage.jsx";

function Enuncify() {
  const text = Text();
  return (
    <div className="mt-30 py-40">
      <p>{text}</p>
      <TextToSpeech/>
      <Recorder/>
    </div>
  );
}

export default Enuncify;
