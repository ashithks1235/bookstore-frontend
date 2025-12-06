import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {

const [offcanvasStatus,setOffcanvasStatus] = useState(false)

  return (
    <div>
      <button onClick={()=>setOffcanvasStatus(true)} className="text-blue-600 border rounded border-blue-600 p-3 flex items-center hover:bg-blue-600 hover:text-white"><FaEdit className='me-2'/> Edit</button>
      {/* off-canvas */}
      {
        offcanvasStatus &&
        <div>
        <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
      <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
        {/* off-canvas head */}
        <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
          <h1>Update User Profile</h1>
          <FaX onClick={()=>setOffcanvasStatus(false)}/>
        </div>
        {/* off-canvas body */}
        <div className="flex justify-center items-center flex-col my-5">
          <label htmlFor="userProfile">
            <input type="file" id='userProfile' hidden/>
          <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://img.freepik.com/free-vector/fashionable-avatar-girl_24877-81624.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
          <button className="bg-yellow-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FaPen/></button></label>
          <div className="mb-3 w-full px-5">
            <input type="text" placeholder='username' className='w-full border border-gray-300 p-2 rounded'/>
          </div>
          <div className="mb-3 w-full px-5">
            <input type="password" placeholder='new password' className='w-full border border-gray-300 p-2 rounded'/>
          </div>
          <div className="mb-3 w-full px-5">
            <input type="password" placeholder='confirm password' className='w-full border border-gray-300 p-2 rounded'/>
          </div>
          <div className="mb-3 w-full px-5">
            <textarea type="text" placeholder='bio' className='w-full border border-gray-300 p-2 rounded'/>
          </div>
          <div className="flex justify-end w-full px-5 mt-5">
            <button className='bg-yellow-600 text-white px-3 py-2 rounded me-1'>RESET</button>
            <button className='bg-green-600 text-white px-3 py-2 rounded'>UPDATE</button>
          </div>
        </div>
      </div>
      </div>
      }
    </div>
  )
}

export default Edit