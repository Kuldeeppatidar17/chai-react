import React from 'react'

const NavBar = () => {
  return (
    <nav style={{ backgroundColor: 'rgb(33, 33, 62)'}} className="text-white flex justify-between px-4 h-14 items-center">
        <div className='logo text-xl font-bold text-white'>
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP&gt;</span>
        </div>
        <div className='flex'>
        <ul>
            <li className='flex gap-10 pr-20'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul>
        <div className='pr-10'>
        <i className="fa-brands fa-github text-2xl"></i>
        </div>
        </div> 
    </nav>
  )
}

export default NavBar
