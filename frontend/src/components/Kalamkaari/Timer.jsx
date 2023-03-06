import React from 'react'

import { useTimer } from '../../services'
import { formatTime } from '../../utils'

// const element = <FontAwesomeIcon icon={faClock} />

const Timer = ({ time }) => {
  const {Mins,Secs}=formatTime(time)
  return (
    <div className="app ">
      <div className="stopwatch-card">
      </div>
      <div class="text-6xl text-center flex w-full items-center mb-4">
            <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="minutes">{Mins}</div>
                <div class="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div class="text-2xl mx-1 font-extralight">:</div>
            <div class="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div class="font-mono leading-none" x-text="seconds">{Secs}</div>
                <div class="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
    </div>
  )
}

export default Timer
