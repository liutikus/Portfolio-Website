import React, { useState } from 'react'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import './Nav.css'
import HamMenu from '../Components/HamMenu'
import { FaConnectdevelop } from "react-icons/fa";
import { Spin as Hamburger, Spin } from 'hamburger-react'



const Nav = () => {

    const [burgerToggle, setBurgerToggle] =useState(false)

    const handleToggle = e=>setBurgerToggle(!burgerToggle)

  return (
    <div>
      <div className="nav-container">
        <div className="logo">
        <span><FaConnectdevelop/></span>
            <p>nicolae codreanu</p>
        </div>
        <div className="info-links">

            <a href="#">home</a>
            <a href="#">projects</a>
            <a href="#">contact</a>

        </div>
        <div className="burger-icon"onClick={handleToggle}>
          <Spin/>
        </div>
 
      </div>
    <HamMenu burgerToggle={burgerToggle}/>

      
    </div>
  )
}

export default Nav
