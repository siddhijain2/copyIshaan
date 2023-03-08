import sample from "lodash/sample";
import defaultTexts from "../i18n/content";

function getRandomText(lang, isMobile = false) {

  const texts = defaultTexts["en-IN"];

  return sample(texts);
}

export default function RandomText({ lang, isMobile }) {
  const text = getRandomText("en-IN", isMobile);
  return <p>{text}</p>;
}
