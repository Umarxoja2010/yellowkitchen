import React from 'react'
import rasm1 from "../img/hero.logo.svg"
import rasm4 from "../img/cart.svg"
import rasm5 from "../img/person.svg"
import "../style/header.css"

function Header() {
  return (
   <header className='header'>
<div className="container">
    <div className="header_wrapper">
        <div className="header_icon">
            <img src={rasm1} alt="" />
        </div>
        <div className="header_oxir">
        <div> 
            <img src={rasm5} alt="" />
            <span>Log in</span></div>
            <div>
            <img src={rasm4} alt="" />
            <span>0</span>
        </div>
       
        </div>
       
    </div>
</div>
   </header>
  )
}

export default Header
