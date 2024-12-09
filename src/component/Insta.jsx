import React from 'react'
import rasm1 from "../img/Rectangle 1.png"
import rasm2 from "../img/Rectangle 2.png"
import rasm3 from "../img/Rectangle 3.png"
import rasm4 from "../img/Rectangle 4.png"
import '../style/insta.css'
function Insta() {
  return (
<section className='insta'>
<div className="container">
    <div className="insta_top">
        <h2>#YellowKitchens  <span>in instagram</span></h2>
    </div>
    <div className="insta_bottom">
        <img src={rasm1} alt="" />
        <img src={rasm2} alt="" />
        <img src={rasm3} alt="" />
        <img src={rasm4} alt="" />
    </div>
</div>
</section>
  )
}

export default Insta
