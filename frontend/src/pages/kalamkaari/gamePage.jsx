import Canvas from '../../components/Kalamkaari/canvas'
import Button from '../../components/Button'
import axios from 'axios'
import {useState } from 'react'
import Timer from '../../components/Kalamkaari/Timer'

function Kalamkaari() {
  const [word,setWord] = useState("click to start")
  const handleSubmit=async()=> {
    try{
    const response=await axios.get('kalamkaari/dict/beginner/');
    console.log(response)
    setWord(response.data)
    console.log(word)
    }catch(err)
    {
      console.log(err)
    }
  }

  return (
    <>
     
      <Canvas/>
      <Timer/>
      <button
          className="btn waves-effect waves-light blue darken-1 submit-prediction"
          type="submit"
          name="action"
          onClick={handleSubmit}
        >
          {word}
        </button>
        
    </>
  );
}

export default Kalamkaari;
