import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSlidebar from '../components/AdminSlidebar'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function AdminProfile() {
  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className="col-span-1">
          <AdminSlidebar/>
        </div>
        <div className='col-span-4 p-10'>
          <h1 className="text-center mb-10 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <p className='text-xl'>Welcome to the Admin Profile Settings section of the Book Management Website.
                  This dashboard allows administrators to easily manage their personal information, account preferences, and security settings.
                  Through this module, admins can:
                  Update personal details such as name, email, and contact information
                  Upload or change profile photo
                  Modify login credentials, including password updates
                  Manage notification preferences
                  View account activity and security logs
                  Configure interface settings, such as theme or language (if available)
                  The goal of this section is to ensure a personalized and secure admin experience, helping administrators manage their account with convenience and reliability.</p>
            </div>
            <div className="px-10">
              <div className="flex justify-center items-center flex-col my-5 bg-blue-100 p-10 rounded">
                        <label htmlFor="userProfile">
                          <input type="file" id='userProfile' hidden/>
                        <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://img.freepik.com/free-vector/fashionable-avatar-girl_24877-81624.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
                        <button className="bg-yellow-300 z-53 text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-20px'}}><FaPen/></button></label>
                        <div className="mb-3 w-full px-5">
                          <input type="text" placeholder='username' className='w-full p-2 rounded bg-white'/>
                        </div>
                        <div className="mb-3 w-full px-5">
                          <input type="password" placeholder='new password' className='w-full p-2 rounded bg-white'/>
                        </div>
                        <div className="mb-3 w-full px-5">
                          <input type="password" placeholder='confirm password' className='w-full p-2 rounded bg-white'/>
                        </div>
                        <div className="flex justify-end w-full px-5 mt-5">
                          <button className='bg-yellow-600 text-white px-3 py-2 rounded me-1'>RESET</button>
                          <button className='bg-green-600 text-white px-3 py-2 rounded'>UPDATE</button>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminProfile