import React from 'react'
import rasm1 from "../img/hero.img.png"
import rasm2 from "../img/time-eat.svg"
import rasm3 from "../img/paris.png"
import rasm4 from "../img/delivery.svg"
import "../style/hero.css"
function Hero() {
  return (
   <section className='hero'>
<div className="container">
    <div className="hero_wrapper">
        <div className="hero_content">
            <h2>Your Food court at home</h2>
            <div>
            <button>
                <h5>Delivery</h5>
                <span>Order in</span>
            </button>
            <button>
                <h5>Tekaout</h5>
                <span>Greb and go</span>
            </button>
            </div>
          
        </div>
        <div className="hero_img">
<img src={rasm1} alt="" />
        </div>
    </div>
    <div className="hero_pas">
        <div>
        <img src={rasm2} alt="" />
        <p>delivery in all paris in less than 30 minutes</p>
        </div>
       <div>
       <img src={rasm4} alt="" />
        <p>delivery in all paris in less than 30 minutes</p>
       </div>
       <div>
       <img src={rasm3} alt="" />
        <p>delivery in all paris in less than 30 minutes</p>
       </div>
       
    </div>
</div>
   </section>
  )
}

export default Hero
