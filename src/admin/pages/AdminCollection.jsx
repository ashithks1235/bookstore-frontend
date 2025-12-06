import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSlidebar from '../components/AdminSlidebar'

function AdminCollection() {
  const [tab,setTab] = useState(1)
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSlidebar/>
        </div>
        <div className="col-span-4">
          <h1 className='text-center my-5 font-bold text-3xl'>All Resources</h1>
          <div className="flex justify-center my-10 text-xl font-semibold">
            <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer":"border-gray-300 border-b p-2"}>Books</p>
            <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer":"border-gray-300 border-b p-2"}>Users</p>
          </div>
          {
            tab==1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              <div className="shadow rounded p-3 mx-4">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <p>$ 12</p>
                <button className="bg-green-600 p-2 text-white mt-2 w-full">Approve</button>
              </div>
              </div>
            </div>
            }
          {
            tab==2 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate user card */}
              <div className="rounded bg-gray-200 p-2 m-2">
                <p className="text-red-600 font-bold text-md">ID : 6878793893</p>
                <div className="flex tems-center mt-3">
                  <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="user" />
                  <div className="flex flex-col ml-3 w-full">
                    <h4 className="text-blue-600 font-bold text-lg">username</h4>
                    <p>email</p>
                  </div>
                </div>
              </div>
            </div>
            }
        </div>
      </div>
    </>
  )
}

export default AdminCollection