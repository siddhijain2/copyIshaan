import { useLocation } from 'react-router-dom'
import { correct, result, streak, stopwatch, clock,wrong } from '../../assets'
import CircularProgress from '@mui/joy/CircularProgress'
import { Button } from '@mui/material'
import { titleContent } from '../../utils'

function KalamkaariResult() {
  const { state } = useLocation()
  console.log(state)
  const { res } = state || {}
  const word=localStorage.getItem('word')
  console.log(word)
  console.log(typeof(word))
  const handleColor = (index) => {
      if(res.matched[index]==1)
        return "green"
      else if(res.matched[index]==2)
        return "#EF846B"
      else return "red"
  }
  return (
    <>
      <div class="max-w-[650px] py-4 px-8 bg-[#F3E5AB] shadow-lg rounded-lg mx-auto my-44 h-[75%]">
        <div class="flex justify-center  -mt-16">
          {res.accuracy*100>=90?
          <img class="w-24 h-24 object-cover rounded-full " src={correct} />
          :<img class="w-24 h-24 object-cover rounded-full " src={wrong} />
          }
        </div>

        <div className="mt-10 justify-center text-center items-center relative">
          <div className="font-[16px] mb-2">
            <h2>{res.result}</h2>
          </div>
          <CircularProgress
            size="md"
            determinate
            value={Math.floor(res.accuracy * 100)}
            color="success"
          >
            {Math.floor(res.accuracy* 100)}
          </CircularProgress>
          <p>accuracy: {Math.floor(res.accuracy* 100)}%</p>
          <div class=" flex justify-center text-center items-center mt-2">
            <img class="w-8 h-8 " src={streak} />
          </div>
          <p>streak:{res.streak}</p>
          <div class=" flex justify-center text-center items-center mt-2">
            <img class="w-10 h-10" src={clock} />
          </div>
          <p>best time:{res.best_time}</p>
          <div class=" flex justify-center text-center items-center mt-2">
            <img class="w-8 h-8 " src={stopwatch} />
          </div>
          <p>current time:{res.cur_time}</p>

          <p className="mt-2 flex justify-center text-center items-center mt-2">Text recieved:
          <div className="ml-2 font-[16px]">
          {word.split("").map((x,index)=> {
          return <span style={{ color: handleColor(index),fontSize:24 }}>{`${x} `}</span>;
        })}</div>
        </p>
          <p className="mt-2">
            Try:{' '}
            <Button variant="contained" size="small" color="success">
              {res.suggestions}
            </Button>
          </p>
          <div class="flex  w-36 ">
            <img
              class="w-36 h-36 absolute bottom-0 top-[200px] left-0 "
              src={result}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default KalamkaariResult
