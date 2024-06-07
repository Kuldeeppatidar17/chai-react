import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"kuldeep",
    age:23
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-md mb-4'>Tailwid test</h1>
      <Card userName="chaiaurcode" btnText="click on"/>
      <Card userName="kuldeep"/>
    </>
  )
}

export default App
