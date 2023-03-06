import log from "loglevel";

function pause() {
  window.speechSynthesis.pause();
}

function resume() {
  window.speechSynthesis.resume();
}

function cancel() {
  window.speechSynthesis.cancel();
}

/**
 * @param  {string} text - Must have at least one word.
 * @return {string} Speech result
 */
function speak(text, langCode = "en-IN") {
  console.log("Text Speak is called");
  cancel();
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = langCode;
  msg.voiceURI = "native";
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;

  msg.onstart = (evt) => {
    log.info("Speaking...", text);
  };
  msg.onend = (evt) => {
    log.info(`Finished in ${evt.elapsedTime} seconds.`);
  };
  msg.onerror = (evt) => {
    log.error(evt);
  };
  window.speechSynthesis.speak(msg);
}

export default { pause, resume, cancel, speak };
