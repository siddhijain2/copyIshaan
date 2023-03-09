import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import Recorder from "./recorder.jsx";
import Button from "../../components/Button";
import { CircularProgress } from "@mui/material";

// import Timer from "../../components/Kalamkaari/Timer";
// import { getWord, useTimer } from "../../services";

function Speakwise() {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
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
    <div className="h-screen flex flex-col justify-center items-center relative">
      {/* <img className=" h-[90%] z-0 " src={Speakwiser} /> */}
      <div class="flex items-center justify-center  absolute z-50 mt-50">
        <div class="w-5/5 py-20  ">
          <div class=" flex flex-col text-sm rounded-md">
            <input
              class="rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              type="text"
              placeholder="Enter topic for prompt"
            />
            {isLoading ? (
              <CircularProgress />
            ) : (
              <button
                class="mt-5 border p-2 shadow:md bg-gradient-to-r from-Tomato to-ChiliRed text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
          <h1 align="center"><b>{prompt}</b></h1>
          <div>{response}</div>
          <div>Total words = {countWords(response)}</div>
          <Recorder />
        </div>
      </div>
    </div>
  );
}

export default Speakwise;
