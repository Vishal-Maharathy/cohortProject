import { useEffect, useState } from 'react'
import axios from 'axios'

function useCoordinates(){
  const [coordinates, setCoordinates] = useState({lat: null, lon: null})
  useEffect(() => {
    window.addEventListener('mousemove', (e)=>{
      setCoordinates({
        X:e.clientX,
        Y:e.clientY
      })
    });
    // return ()=>{
    //   window.removeEventListener('mousemove')
    // }
  }, [])
  return [coordinates]
}

function App() {
  const [coorindates] = useCoordinates()
  return (
    <>
      X:{coorindates.X}<br/>
      Y:{coorindates.Y}
    </>
  )
}

export default App