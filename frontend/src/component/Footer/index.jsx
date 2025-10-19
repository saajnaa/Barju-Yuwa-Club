import React from 'react'
import { CgCopyright } from "react-icons/cg"; 
import {Link} from 'react-router-dom'
import './footer.css'


function Footer() {
  return (
    <>


      <div className="dev-sec">
        <p className="p1">|| <CgCopyright /> <span className="orgname">Barju Youth Club </span>|| All Right Reserved <span className="span2"> 2025</span> ||</p>

        <p className='p2'>Developed By <Link  className='footerlink' to={`https://sajan1.com.np`} target='_blank'>Sajan Rishidev ॐ</Link></p>

      </div>

    </>

  )
}

export default Footer