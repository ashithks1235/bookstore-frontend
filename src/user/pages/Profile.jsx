import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import Purchase from '../components/Purchase'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'

function Profile() {

const [tabNo,setTabNo] = useState(1)

  return (
    <>
      <Header/>
      <div style={{height:'300px'}}></div>
        <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className='p-3' >
          <img width={'230px'} height={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/free-vector/fashionable-avatar-girl_24877-81624.jpg?semt=ais_hybrid&w=740&q=80" alt="profile" />
        </div>
        <div className='md:flex justify-between px-20 mt-5'>
          <div className="flex items-center">
            <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
            <FaCircleCheck className='text-blue-400 ms-3'/>
          </div>
          <Edit/>
        </div>
        <p className='text-center md:px-20 px-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo, eaque in sequi amet praesentium consequatur? Delectus dicta animi officia aliquam corporis accusamus modi? Aliquam minus voluptatem animi perspiciatis nostrum.</p>
        <div className='md:px-40'>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={()=>setTabNo(1)} className={tabNo==1?'border-l border-t border-r p-4 border-gray-200 rounded cursor-pointer':'border-b p-4 border-gray-200 rounded cursor-pointer'}>Sell Books</p>
            <p onClick={()=>setTabNo(2)} className={tabNo==2?'border-l border-t border-r p-4 border-gray-200 rounded cursor-pointer':'border-b p-4 border-gray-200 rounded cursor-pointer'}>Book Status</p>
            <p onClick={()=>setTabNo(3)} className={tabNo==3?'border-l border-t border-r p-4 border-gray-200 rounded cursor-pointer':'border-b p-4 border-gray-200 rounded cursor-pointer'}>Purchase History</p>
          </div>
          {/* contents */}
          {
            tabNo==1 &&
            <div><SellBook/></div>
            }
            {
            tabNo==2 &&
            <div><BookStatus/></div>
            }
            {
            tabNo==3 &&
            <div><Purchase/></div>
            } 
        </div>
      <Footer/>
    </>
  )
}

export default Profile