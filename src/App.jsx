import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import Books from './user/pages/Books'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import View from './user/pages/View'

import AdminHome from './admin/pages/AdminHome'
import AdminCollection from './admin/pages/AdminCollection'
import AdminProfile from './admin/pages/AdminProfile'

import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Preloader from './components/Preloader'
import { useState } from 'react'

function App() {

  const [loader,setLoader] = useState(true)

  setTimeout(()=>{
    setLoader(false)
  },4000)

  return (
    <>
      <Routes>
        <Route path='/' element={loader?<Preloader/>:<Home/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth registerURL={true}/>}></Route>
        <Route path='/books' element={<Books/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

        <Route path='/user/profile' element={<Profile/>}></Route>
        <Route path='/books/:id/view' element={<View/>}></Route>

        <Route path='/admin/home' element={<AdminHome/>}></Route>
        <Route path='/admin/collections' element={<AdminCollection/>}></Route>
        <Route path='/admin/profile' element={<AdminProfile/>}></Route>

        <Route path='/*' element={<Pnf/>}></Route>
      </Routes>
    </>
  )
}

export default App
