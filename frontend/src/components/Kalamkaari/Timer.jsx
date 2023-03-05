import React from 'react'

import { useTimer } from '../../services'
import { formatTime } from '../../utils'

// const element = <FontAwesomeIcon icon={faClock} />

const Timer = ({ time }) => {
  return (
    <div className="app">
      <h3>React Stopwatch </h3>
      <div className="stopwatch-card">
        <p>{formatTime(time)}</p>
      </div>
    </div>
  )
}

export default Timer
