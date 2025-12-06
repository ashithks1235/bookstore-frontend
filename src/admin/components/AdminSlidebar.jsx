import React from 'react'
import { FaChartSimple, FaDatabase, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSlidebar() {
  return (
    <>
      <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      {/* image */}
      <div className="flex justify-center">
        <img style={{width:'100px',height:'100px',borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="profile" />
      </div>
      {/* name */}
      <h1 className="text-xl font-bold my-5 text-center">Name</h1>
      {/* nav links */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mt-3">
          <Link to={'/admin/home'}><FaChartSimple className='me-1'/>Dashboard</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/collections'}><FaDatabase className='me-1'/>Collections</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/profile'}><FaGear className='me-1'/>Settings</Link>
        </div>

      </div>
      </div>
    </>
  )
}

export default AdminSlidebar