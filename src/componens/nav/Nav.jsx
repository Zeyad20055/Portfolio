import React from 'react'
import './nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";


import {useState} from 'react'


function Nav() {

  const [activeNav , setActiveNav]=useState("#")
  return (
    <nav>
<a href="#" className={activeNav === "#" ? "active" : "" } onClick={()=>setActiveNav("#") }><IoHomeOutline/> </a>
<a href="#About"    className={activeNav === "#About" ? "active" : "" }           onClick={()=>setActiveNav("#About") } ><LuUserRound/> </a>
<a href="#Services" className={activeNav === "#Services" ? "active" : "" }    onClick={()=>setActiveNav("#Services") } ><BiBook/> </a>
<a href="#Projects"   className={activeNav === "#Projects" ? "active" : "" }          onClick={()=>setActiveNav("#Projects") } ><RiServiceLine/> </a>
<a href="#Contect"   className={activeNav === "#Contect" ? "active" : "" }          onClick={()=>setActiveNav("#Contect") } ><BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Nav


