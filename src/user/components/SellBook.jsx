import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

function SellBook() {

const [bookDetails,setBookDetails] = useState({
  title:"",author:"",page:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadIMG:[]
})
const [preview,setPreview] = useState("")
const [previewList,setPreviewList] = useState ([])

console.log(bookDetails);

const handleBookImageUpload = (e)=>{
  //console.log(e.target.files[0]);
  const file = e.target.files[0]
  const uploadImgArray = bookDetails.uploadIMG
  uploadImgArray.push(file)
  setBookDetails({...bookDetails,uploadIMG:uploadImgArray})
  const url = URL.createObjectURL(file)
  setPreview(url)
  const demoPreviewList = previewList
  demoPreviewList.push(url)
  setPreviewList(demoPreviewList)
}

const handleResetForm = (e)=>{
  setBookDetails({
          title:"",author:"",page:"",imageURL:"",price:"",discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadIMG:[]
  })
  setPreview("")
  setPreviewList([])
}

  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
      <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Title'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Author'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.page} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='No. of Pages'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Book Image URL'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Original Price'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Discount Price'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} type="text" rows="5" className="w-full p-2 rounded bg-white" placeholder='Abstract'/>
          </div>
        </div>
        <div className='px-3'>
          <div className="mb-3">
            <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Publisher'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Language'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='ISBN'/>
          </div>
          <div className="mb-3">
            <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" className="w-full p-2 rounded bg-white" placeholder='Category'/>
          </div>
          <div className="mb-3 flex justify-center items-center">
            <label htmlFor='uploadProfile'>
              <input onChange={e=>handleBookImageUpload(e)} type="file" id="uploadProfile" hidden/>
              <img height={'200px'} width={'200px'} src={preview?preview:"https://cdn-icons-png.flaticon.com/512/4147/4147103.png"} alt="" />
            </label>
          </div>
          {
            preview &&
            <div className="flex items-center justify-center">
            {
              previewList?.map((bookImgURL,index)=>(
                <img key={index} width={'70px'} height={'70px'} src={bookImgURL} alt="book-image" className='mx-2'/>
              ))
            }
            {
              previewList.length<3 &&
              <label htmlFor="bookUpload">
              <input onChange={e=>handleBookImageUpload(e)} type="file" id='bookUpload' hidden/>
              <FaPlus className='text-3xl ms-2'/>
            </label>
            }
          </div>
          }
        </div>
      </div>
      <div className="p-3 w-full flex md:justify-end justify-center mt-8">
        <button onClick={handleResetForm} className="py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600">RESET</button>
        <button className="py-2 px-3 rounded bg-white text-gray-600 hover:bg-gray-600 hover:text-white ms-3">ADD BOOK</button>
      </div>
    </div>
  )
}

export default SellBook