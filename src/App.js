import { useEffect, useState } from 'react';
import './App.css';
import { MyComponent1 } from './components/MyComponent1'
import { MyComponent2 } from './components/MyComponent2(UseEffect LifeCycle)'


function App() {
  const [showComponent, setShowComponent] = useState(true)
  setTimeout(() => {
    setShowComponent(!showComponent)
  }, 2000)

  useEffect(() => {
    console.log('App is mounted')
    return () => {
      //this function runs when dependency changes / component is unmounted
      console.log('App is unmounted')
    }
  }, [])


  return (
    <>
      <MyComponent1 showComponent={showComponent} />
      {showComponent && <MyComponent2 />}
    </>

  )
}

export default App;
