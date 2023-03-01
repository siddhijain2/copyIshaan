<<<<<<< HEAD
import Canvas from "../../components/Kalamkaari/canvas";
=======
import Canvas from '../../components/Kalamkaari/canvas'
import Button from '../../components/Button'
import axios from 'axios'
import {useState } from 'react'
import Timer from '../../components/Kalamkaari/Timer'
>>>>>>> 420d3d78480b746cfc288565b60fe270027284d6

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
<<<<<<< HEAD
      <Canvas />
=======
     
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
        
>>>>>>> 420d3d78480b746cfc288565b60fe270027284d6
    </>
  );
}

export default Kalamkaari;
