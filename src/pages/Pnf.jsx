import React from 'react'

function Pnf() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <img src="https://cdn.dribbble.com/userupload/8726277/file/still-90096ae0b20436af7d475737af5b86e5.gif?resize=400x0" alt="lost illustration" className="w-[280px] md:w-[340px] mb-6"/>
      <p className="text-gray-600 text-lg mb-2">Oh No !</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-3">
        Look Like You're Lost
      </h1>
      <p className="text-gray-500 text-center mb-6">
        The page you are looking for is not available
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm">
        BACK HOME
      </button>
    </div>
    </>
  )
}

export default Pnf