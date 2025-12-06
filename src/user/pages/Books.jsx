import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {

const [toggle,setToggle] = useState(false)

  return (
    <>
      <Header/>
      <div>
        <div className='flex flex-col justify-center items-center my-5'>
        <h1 className="text-3xl font-bold my-5">All Books</h1>
        <div className="flex my-5">
          <input type="text" className="p-2 boredr boredr-gray-200 text-balck w-100 placeholder-gray-600" placeholder='Search by book title'/>
          <button className="p-2 bg-blue-900 text-white">Search</button>
        </div>
      </div>
      {/* books card & filter */}
      <div className="md:grid grid-cols-4 p-5 md:px-20 mb-10">
        {/* filter */}
        <div className="col-span-1">
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">Filter</h1>
            <button onClick={()=>setToggle(!toggle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
          </div>
          {/* list of filters */}
          <div className={toggle?"block":'md:block hidden'}>
            {/* duplicate filter item */}
            <div className="mt-3">
              <input type="radio"name='filter' id='key1'/>
              <label className='ms-3' htmlFor="key1">category-name</label>
            </div>
            <div className="mt-3">
              <input type="radio"name='filter' id='key1'/>
              <label className='ms-3' htmlFor="nofilter">No filter</label>
            </div>
          </div>
        </div>
        {/* books crd */}
        <div className="col-span-3">
          <div className="md:grid grid-cols-4 mt-5 md:mt-0">
            {/* duplicate book */}
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
            {/* duplicate book */}
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
            {/* duplicate book */}
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
              </div>
            </div>
            {/* duplicate book */}
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <Link to={'/books/:id/view'} className='bg-blue-800 p-2 text-white mt-2'>View Book</Link>
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

export default Books