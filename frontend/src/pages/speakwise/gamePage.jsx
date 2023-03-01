import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Recorder from "./recorder.jsx";

function Speakwise() {
  const [response, setResponse] = useState("original");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = new Configuration({
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Write a note on " + prompt,
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

  return (
    <>
      <div>
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
      <div>{/* {prompts} */}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
      <Recorder></Recorder>
    </>
  );
}

export default Speakwise;

// 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
