import React from 'react'

function BookStatus() {
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
              <img height={'80px'} width={'80px'} src="https://t3.ftcdn.net/jpg/06/43/51/18/360_F_643511839_TaM58ndKnDeSgXsEsiAqfcAhnZpTaKBU.jpg" alt="pending" />
              <img height={'80px'} width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglrXRJKf4NkoTVokEi2USm6Sv0Mm-dhNl9Q&s" alt="approved" />
              <img height={'80px'} width={'100px'} src="https://m.media-amazon.com/images/I/71MbAflitGS.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg" alt="sold" />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg" alt="" />
            <div className="mt-4 flex justify-end">
              <button className="bg-red-600 text-white p-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookStatus