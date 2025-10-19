import { Routes, Route } from 'react-router-dom'


import Home from './component/Home/Index'
import Navbar from './component/Navbar/Index'
import Footer from './component/Footer/index'
import Events from './component/Events/Index'
import Gallery from './component/Gallery/Index'
import Donation from './component/Donation/Index'
import Contact from './component/Contact/Index'
import AboutUs from './component/AboutUs/Index'
import Og from './component/og/Og'


import './app.css'

export function App() {

  return (
    <>
    <Og />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Events' element={<Events />} ></Route>
        <Route path='/Gallery' element={<Gallery />}></Route>
        <Route path='/Donation' element={<Donation />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>

      </Routes >
      <Footer />

    </>
  )
}


