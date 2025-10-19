import { Routes, Route } from 'react-router-dom'


import Home from './component/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Events from './component/Events'
import Gallery from './component/Gallery'
import Donation from './component/Donation'
import Contact from './component/Contact'
import AboutUs from './component/AboutUs'


import './app.css'

export function App() {

  return (
    <>
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


