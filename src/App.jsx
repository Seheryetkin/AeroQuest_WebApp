import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Nav from './components/Nav'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='relative bg-gray-200 h-screen w-screen text-black   bg-[url(https://i.pinimg.com/originals/79/2d/80/792d80c7c31a1f0b4a5bfefcb26260c3.jpg)] bg-no-repeat bg-cover  object-contain'>
        <Nav/>
    </div>
  )
}

export default App
