  import { useEffect, useState } from 'react'
  import axios from 'axios'

  function useDebounce(inputValue, interval) {
    const [value, setValue] = useState("")

    useEffect(() => {
      
      let referenceTimer = setTimeout(() => {
        setValue(inputValue)
      }, interval)

      return ()=>{clearTimeout(referenceTimer)}
    }, [inputValue])

    return value
  }

  const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        /><br/>
        <h1>{debouncedValue}</h1>
      </>
    );
  };

  function App() {

    return (
      <>
        <SearchBar />
      </>
    )
  }


  export default App