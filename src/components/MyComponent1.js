import React, { useEffect, useState } from 'react';

export function MyComponent1({ showComponent}) {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log('Component1 is mounted BRUH')
      return () => {
        //this function runs when dependency changes / component is unmounted
        console.log('Component1 is unmounted BRUH')
      }
    }, [])

    const incrementCount = () => {
      setCount(count + 1);
    };
    const decrementCount = () => {
      setCount(count - 1);
    };
    return (
      <div>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <div>
          showComponent: {showComponent ? 'true' : 'false'}
        </div>
      </div>
    );
  }