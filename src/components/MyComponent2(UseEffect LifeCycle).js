import React, { useEffect, useState } from 'react';

export function MyComponent2() {
  useEffect(() => {
    console.log('Component2 is mounted')

    return () => {
      //this function runs when dependency changes / component is unmounted
      console.log('Component2 is unmounted')
    }
  }, [])
  return (
    <>
      <div>
        Inside Div components
      </div>
    </>
  )
}