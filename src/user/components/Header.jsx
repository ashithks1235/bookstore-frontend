import React, { useState } from 'react'
import { FaBars, FaFacebook, FaUser } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {

const [toggle,setToggle] = useState(false)

  return (
    <>
    <div className='grid grid-cols-3 p-3'>
      {/*logo*/}
      <div className='flex item-center'>
        <img width={'35px'} height={'35px'} src="./src/assets/logo.png" alt='logo'></img>
        <h1 className='text-2xl font-bold ms-2 md:hidden text-gray-900'>BOOKSTORE</h1>
      </div>
      {/*title*/}
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold text-gray-900'>BOOKSTORE</h1>
      </div>
      {/*logo*/}
      <div className="md:flex justify-end items-center hidden">
        <AiFillInstagram className='me-1 text-gray-900'/>
        <FaXTwitter className='me-1 text-gray-900'/>
        <FaFacebook className='me-1 text-gray-900'/>
        <FaLinkedinIn className='me-1 text-gray-900'/>
        <Link to={'/login'}><button className='rounded px-3 py-2 ms-3 flex bg-gray-900 items-center text-yellow-500'><FaUser className='text-yellow-500 me-1'/>Login</button></Link>
      </div>
    </div>
    <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
      {/* menu icon & login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        <button onClick={()=>setToggle(!toggle)}><FaBars/></button>
        <Link to={'/login'}><button className='rounded px-3 py-2 ms-3 flex bg-gray-900 items-center text-yellow-500'><FaUser className='text-yellow-500 me-1'/>Login</button></Link>
      </div>
      <ul className={toggle?'flex flex-col':'md:flex justify-center items-center hidden'}>
        <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/'}>Home</Link></li>
        <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/books'}>Books</Link></li>
        <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header