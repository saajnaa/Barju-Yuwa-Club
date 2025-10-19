import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//=================== React Icons ===================================
import { RxCross2 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";

import '../Navbar/Navbar.css'
import logo from '../../assets/img/fevicon/fevicon.png'

function Navbar() {
    const [showLink, setShowLink] = useState(false);

    console.log(window.innerWidth)
    const handleclick = () => {

        setShowLink(!showLink)

    }


    //========== Navigaton==============
    const Navigate = useNavigate()



    return (
        <>
            <nav>

                <div onClick={()=>Navigate('/')} className="logo">
                
                        <img src={logo} alt="Barju Yuwa Club" />
                    <h3>Barju Youth Club</h3>
        

            </div>


            <div className={showLink ? "mobile-view" : "nav-links"}>


                <li>
                    <Link className='link' to="/Events">Events</Link>
                </li>

                <li>
                    <Link className='link' to="/Gallery">Gallery</Link>
                </li>

                <li>
                    <Link className='link' to="/Donation">Donation</Link>
                </li>

                <li>
                    <Link className='link' to="/Contact">Contact</Link>
                </li>

                <li>
                    <Link className='link' to="/AboutUs">About Us</Link>
                </li>


            </div>


            <div onClick={handleclick} className="navmenu">
                <span className={showLink ? "hidemenu" : "menu"}><BiMenuAltRight /></span>
                <span className={showLink ? "showcancel" : "cancel"}><RxCross2 /></span>
            </div>



        </nav >




        </>
    )
}

export default Navbar;