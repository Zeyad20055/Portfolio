import React from 'react'
import './footer.css'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
  return (
<footer>
<a href="" className='footer_log'>Zeyad Hamdy</a>
<ul  className='aremlinks'>
  <li > <a href="">Home</a></li>
  <li > <a href="#About">About</a></li>
  <li > <a href="#skills"> Skills</a></li>
  <li > <a href="#Services">Services</a></li>
  <li > <a href="#Projects"> Projects </a></li>
  <li > <a href="#Contect"> Contect </a></li>
 
</ul>

<div className="footer_socials">
  <a href="https://www.facebook.com/share/1C6KXLNj4e" target='_blank'> <FaFacebookF/> </a>
  <a href="https://www.instagram.com/zeyad_hamdy_7?igsh=MWM2b2E4a2txZ2NpcA" target='_blank'> <FaInstagram/> </a>
  <a href="" target='_blank'> <FaXTwitter/> </a>
  
</div>
<div className="footer_copyright">
  <small>&copy; <a href=""> Zeyad Hamdy</a> All rights resserved</small>
</div>
</footer>
  )
}

export default Footer