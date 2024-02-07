import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function useTodos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(async () => {
    let interval = setInterval(async()=>{
      setLoading(true)
      let res = await axios.get("https://sum-server.100xdevs.com/todos")
      setLoading(false)
      setTodos(res.data.todos);
    }, 2000)
    return ()=>{
      clearInterval(interval)
    }
  }, [])
  return [todos, loading]
}

function Loading(){
  return (
    <>Loading...</>
  )
}
function App() {
  const [todos, loading] = useTodos()
  return (
    <div className='container'>
      {loading ? <Loading /> : todos.map(todo => <Track todo={todo} />)}
    </div>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App