import React from 'react'

function SellBook() {
  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
      <h1 className="text-center text-3xl font-medium">Book Status</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Title'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Author'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='No. of Pages'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Book Image URL'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Original Price'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Discount Price'/>
          </div>
          <div className="mb-3">
            <input type="text" rows="5" className="w-full p-2 rounded bg-white" placeholder='Abstract'/>
          </div>
        </div>
        <div className='px-3'>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Publisher'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Language'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='ISBN'/>
          </div>
          <div className="mb-3">
            <input type="text" className="w-full p-2 rounded bg-white" placeholder='Category'/>
          </div>
          <div className="mb-3 flex justify-center items-center">
            <label htmlFor='uploadProfile'>
              <input type="file" id="uploadProfile" hidden/>
              <img height={'200px'} width={'200px'} src="https://cdn-icons-png.flaticon.com/512/4147/4147103.png" alt="" />
            </label>
          </div>
        </div>
      </div>
      <div className="p-3 w-full flex md:justify-end justify-center mt-8">
        <button className="py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600">RESET</button>
        <button className="py-2 px-3 rounded bg-white text-gray-600 hover:bg-gray-600 hover:text-white ms-3">SUBMIT</button>
      </div>
    </div>
  )
}

export default SellBook