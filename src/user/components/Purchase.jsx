import React from 'react'

function Purchase() {
  return (
    <div className='p-10 my-20 shadow rounded'>
      {/* dupliacte book with status updation */}
      <div className="rounded p-5 mt-4 bg-gray-100">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="px-4">
            <h1 className="text-2xl">Title</h1>
            <h2 className="text-xl">Author</h2>
            <h3 className="text-lg text-blue-600">$ Price</h3>
            <p className='text-justify'>abstract</p>
            <div className="flex mt-3">
              <img height={'80px'} width={'80px'} src="https://t4.ftcdn.net/jpg/00/49/06/49/360_F_49064979_nbrrNFtMOFCT5YJrW5LCs8Qgtr0XM6Tz.jpg" alt="pending" />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg" alt="purchase" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase