import { useEffect, useState } from 'react'
import axios from 'axios'

function useInterval(callBack, interval){
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    let ref = setInterval(callBack, interval)
    return ()=>{
      clearInterval(ref)
    }
  }, [])
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}


export default App