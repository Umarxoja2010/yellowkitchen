import React from 'react'
import rasm5 from "../img/bagel.svg"
import "../style/bagel.css"
function Bag() {
  return (
    <div>
       <section className='bagel'>
    <div className="container">
    <div className="bagel_top">
          <h2>Specialities</h2>
          <button>show all</button>
        </div>
        <div className="bagel_wrapper">
    
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
    <div className="bagel_card">
<img src={rasm5} alt="" />
        <span>Bagel</span>
    </div>
   

        </div>
    </div>
    </section>
    </div>
  )
}

export default Bag
