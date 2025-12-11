import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaPowerOff, FaUser } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {

const [toggle,setToggle] = useState(false)
const [token,setToken] = useState("")
const [dp,setDp] = useState("")
const [dropDown,setDropDown] = useState(false)

useEffect(()=>{
  if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
    const userToken = sessionStorage.getItem("token")
    setToken(userToken)
    const user = JSON.parse(sessionStorage.getItem("user"))
    setDp(user.picture)
  }
},[token])

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
        {/* login link */}
        {
          !token ?
            <Link to={'/login'}><button className='rounded px-3 py-2 ms-3 flex bg-gray-900 items-center text-yellow-500'><FaUser className='text-yellow-500 me-1'/>Login</button></Link>
            :
            <div>
              <button onClick={()=>setDropDown(!dropDown)} className='shadow-sm ms-5 p-2 hover:bg-gray-100'>
              <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp:"https://i.sstatic.net/l60Hf.png"} alt="profile" />
              </button>
              {/* dropdown list */}
                {
                  dropDown && 
                  <div className="absolute right-0 z-10 mt-2 w-40 shadow rounded bg-white ring-1 ring-black/5 p-2 focus:outline-hidden">
                  {/* profile link */}
                  <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm py-2'><FaAddressCard className='me-2'/>Profile</Link>
                  {/* logout btn */}
                  <button className='flex items-center text-gray-700 text-sm px-3 py-2'>
                    <FaPowerOff className='me-2'/>Logout</button>
                </div>
                }
            </div>
        }
      </div>
    </div>
    <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
      {/* menu icon & login */}
      <div className="flex justify-between items-center text-2xl md:hidden">
        <button onClick={()=>setToggle(!toggle)}><FaBars/></button>
        {/* login link */}
        {
          !token ?
            <Link to={'/login'}><button className='rounded px-3 py-2 ms-3 flex bg-gray-900 items-center text-yellow-500'><FaUser className='text-yellow-500 me-1'/>Login</button></Link>
            :
            <div>
              <button onClick={()=>setDropDown(!dropDown)} className='shadow-sm ms-5 p-2 hover:bg-gray-100'>
              <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src={dp?dp:"https://i.sstatic.net/l60Hf.png"} alt="profile" />
              </button>
              {/* dropdown list */}
                {
                  dropDown && 
                  <div className="absolute right-0 z-10 mt-2 w-40 shadow rounded bg-white ring-1 ring-black/5 p-2 focus:outline-hidden">
                  {/* profile link */}
                  <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm py-2'><FaAddressCard className='me-2'/>Profile</Link>
                  {/* logout btn */}
                  <button className='flex items-center text-gray-700 text-sm px-3 py-2'>
                    <FaPowerOff className='me-2'/>Logout</button>
                </div>
                }
            </div>
        }
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