import Canvas from '../../components/Kalamkaari/canvas'
import Button from '../../components/Button'
import ReactAudioPlayer from 'react-audio-player'
import axios from 'axios'
import { useState } from 'react'
import Timer from '../../components/Kalamkaari/Timer'
import { getWord, useTimer } from '../../services'
import audios from './A.mp3'

function Kalamkaari({ theme, level }) {
  const [words, setWords] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const { timer, handleStart, handlePause } = useTimer()
  const audio = new Audio(audios)

  const handleSubmit = async () => {
    setIsPlaying(true)
    console.log(theme)
    handleStart()
    const res = await getWord({ theme, level })
    console.log(res)
    const { word, definition, audiofile } = res
    console.log(word)
    setWords(word)
  }

  return (
    <>
      <div class="container mx-auto text-grey-darkest mt-40 mb-20">
        <div class=" -mx-2 ">
          <Timer time={timer} />
          <div class="px-4">
              <div class="w-full  md:mx-2 mb-4 md:mb-0 ">
                <div class="bg-primary rounded-lg overflow-hidden shadow-sm  relative">
                  <div class=" pt-4 h-auto md:h-40 lg:h-[80%] ">
                    {isPlaying === false ? (
                      <div className=" text-center  ">
                        <button
                          className="btn waves-effect waves-light blue darken-1 submit-prediction "
                          type="submit"
                          name="action"
                          onClick={handleSubmit}
                        >
                          click to start
                        </button>
                      </div>
                    ) : theme === 'dictation' ? (
                      <ReactAudioPlayer src={audios} autoPlay controls />
                    ) : (
                      <div>{words}</div>
                    )}
                    <Canvas time={timer} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Kalamkaari
