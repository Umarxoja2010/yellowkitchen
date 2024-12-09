import React from 'react'
import rasm1 from "../img/Component 1 (2).png"
import rasm2 from "../img//Component 1.png"
import rasm3 from "../img//Component 11.png"
import rasm4 from "../img//Component 11 (2).png"
import "../style/limon.css"
function Limon() {
  return (
  <section className='limon'>
<div className="container">
    <div className="limon_wrapper">
        <img src={rasm1} alt="" />
        <img src={rasm3} alt="" />
        <img src={rasm2} alt="" />
        <img src={rasm4} alt="" />
    </div>
</div>
  </section>
  )
}

export default Limon
