import React from 'react'
import { formatTime } from '../../utils'
import {timer} from '../../assets'


const Timer = ({ time }) => {
  const {getMinutes,getSeconds}=formatTime(time)
  return (
    <div className="app relative">
      <div className="stopwatch-card relative ml-16 flex flex-col">
               <img src={timer} className="w-12 h-16 items-center z-20  flex"></img>
      </div>
      <div class="text-xl text-center flex w-full items-center ml-12 z-30 absolute ">
            <div class="w-8 p-2 bg-white text-yellow-500 rounded-lg ">
                <div class="font-mono leading-none" x-text="minutes">{getMinutes}</div>
            </div>
            <div class="text-2xl font-extralight">:</div>
            <div class="w-8  p-2 bg-white text-yellow-500 rounded-lg border-black">
                <div class="font-mono leading-none" x-text="seconds">{getSeconds}</div>
            </div>
        </div>
    </div>
  )
}

export default Timer
