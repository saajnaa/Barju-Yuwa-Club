import { FiArrowUpRight } from "react-icons/fi"; 
import React from 'react'
import './hero.css'

//  =========Images=============
import heroimg1 from '../../assets/img/hero-img/hero1.jpg'
import heroimg2 from '../../assets/img/hero-img/hero2.jpg'
import heroimg3 from '../../assets/img/hero-img/hero3.jpg'
import heroimg4 from '../../assets/img/hero-img/hero4.jpg'
import heroimg5 from '../../assets/img/hero-img/hero5.jpg'
import heroimg6 from '../../assets/img/hero-img/hero6.jpg'


const images = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5, heroimg6]

function Index() {

  for (let i = 0; i < images.length; i++) {
    var imgIndex = images[i];

  }

  return (<>

    <div className='hero-Container'>
      <img src={imgIndex} alt="" />

      <div className="hero-float">
        <p>" Your Small Donation Can Change Someone's Life "</p>
        <button>Explore Events <FiArrowUpRight /></button>

      </div>

    </div>

  </>
  )
}

export default Index