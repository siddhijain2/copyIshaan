import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Recorder from "./recorder.jsx";
import Button from "../../components/Button";

// import Timer from "../../components/Kalamkaari/Timer";
// import { getWord, useTimer } from "../../services";



function Speakwise() {
  const [response, setResponse] = useState("original");
  const [prompt, setPrompt] = useState("");

    // const { timer, handleStart, handlePause } = useTimer();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const configuration = new Configuration({
      apiKey: API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write an essay on " + prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // console.log(res);
    setResponse(res.data.choices[0].text);
    // return res.data.choices[0].text;
  };

  function countWords(str) {
    // trim the string to remove any leading or trailing whitespace
    str = str.trim();

    // split the string into an array of words
    var words = str.split(" ");
    localStorage.setItem("totalwords", words.length);
    // return the length of the array
    return words.length;
  }


  return (
    <>
      {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nisi
        nemo optio natus inventore modi esse at provident, beatae perferendis
        temporibus odio doloremque! Unde ad asperiores qui enim accusamus
        soluta.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        tempora facilis error dolore accusamus facere aut suscipit aliquam,
        molestias blanditiis corrupti! Quo, dignissimos quia eum optio adipisci
        dolorem doloribus sunt!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        tempora facilis error dolore accusamus facere aut suscipit aliquam,
        molestias blanditiis corrupti! Quo, dignissimos quia eum optio adipisci
        dolorem doloribus sunt!
      </div>
 

      <div>{ {prompts} }</div> */}
      <form onSubmit={handleSubmit}>
        <input className="mt-40" placeholder="Enter topic for prompt"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <div>{response}</div>
      <div>Total words = {countWords(response)}</div>
      <Recorder></Recorder>

    </>
  );
}

export default Speakwise;

// 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