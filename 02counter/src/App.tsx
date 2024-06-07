import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter=5

  const addValue=()=>{
    
    counter=counter+1
    setCounter(counter)
    console.log("clicked ",counter);
  };

  const removeValue=()=>{
    counter=counter-1 
    setCounter(counter)
    console.log("clicked ",counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
