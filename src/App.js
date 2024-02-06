import { useState } from 'react';
import './App.css';
import { MyComponent1}  from './components/MyComponent'
import { MyComponent2}  from './components/MyComponent2(UseEffect LifeCycle)'


function App() {
  const [showComponent, setShowComponent] = useState(true)
  setTimeout(() => {
    setShowComponent(!showComponent)
  }, 2000)
  return (
    // <MyComponent1 />
    (showComponent && <MyComponent2 />)
    
  )
}

export default App;
