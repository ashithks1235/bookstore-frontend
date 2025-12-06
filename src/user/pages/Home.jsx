import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <div>
        {/* landing */}
        <div style={{height:'500px'}} className="flex flex-col justify-center items-center bg-[url(/landing.jpeg)] bg-center bg-cover text-white">
          <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.4)'}} className='w-full flex flex-col justify-center items-center'>
            <h1 className="text-5xl font-bold">Wonderful Gifts</h1>
            <p>Gift your family and friends a book</p>
            <div className="mt-9 flex items-center">
              <input type='text' className='bg-white p-2 rounded-3xl w-100 text-black placeholder-gray-500' placeholder='Search Books'></input>
              <FaSearch className='text-gray-500'style={{marginLeft:'-40px'}}/>
            </div>
          </div>
        </div>
        {/* new arrival */}
        <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
          <h1 className="text-2xl ont-bold">NEW ARRIVALS</h1>
          <h1 className="text-4xl">Explore our latest collection</h1>
          <div className="md:grid grid-cols-4 w-full my-10">
            {/* duplicate book card */}
            <div className="shadow rounded p-3 m-4 md:my-0">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <p>$ 12</p>
              </div>
            </div>
            {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <p>$ 12</p>
              </div>
            </div>
            {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <p>$ 12</p>
              </div>
            </div>
            {/* duplicate book card */}
            <div className="shadow rounded p-3 mx-4">
              <img width={'100%'} height={'300px'} src='https://images-eu.ssl-images-amazon.com/images/I/71+2-t7M35L._AC_UL210_SR210,210_.jpg' alt='book'></img>
              <div className="flex flex-col justify-center items-center mt-4">
                <h3 className="text-blue-700 font-bold text-xl">Author</h3>
                <p>Title</p>
                <p>$ 12</p>
              </div>
            </div>
          </div>
          <div className='text-center my-10'>
            <Link to={'/books'} className='bg-blue-900 p-3 text-white rounded'>Explore More..</Link>
          </div>
        </section>
        {/* authors */}
        <section className='md:gird grid-cols-2 items-center gap-10 p-5 md:px-40'>
          <div className="text-center">
            <h2 className="text-xl font-bold">FEATURED AUTHORS</h2>
            <h3 className="text-xl">Captivates with every word</h3>
            <p className='my-5 text-justify'>welcome to the authors spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative ourneys, and helps readers discover the minds behind thier favourites books</p>
            <p className='text-justify'>oUR Authors features include: </p>
            <p className='text-justify my-3'><span className='font-black'>Author</span> profiles</p>
          </div>
          <div className='p-5 flex justify-center items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHABV-6Dkdh08xCHP7kvBNpH-6xAYD1Iqm9A&s" alt="authors" />
          </div>
        </section>
        {/* testimony */}
        <section className='md:px-40 flex flex-col justify-center items-center'>
          <h2 className="text-xl font-bold">TESTIMONIALS</h2>
          <h3 className='text-xl'>SEE WHAT OTHERS ARE SAYING</h3>
          <div className='my-5 flex flex-col items-center justify-center'>
            <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="user" />
            <h3 className='my-3'>Luther King</h3>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore culpa qui doloremque, obcaecati ab consequatur delectus voluptate repellat temporibus, ullam laborum laudantium doloribus consectetur id voluptatum facilis eveniet similique hic?</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default Home