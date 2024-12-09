import React from 'react'
import "../style/banner.css"
import rasm1 from "../img/restaurant.png"
function Banner() {
  return (
<section className='banner'>
<div className="container">
    <div className="banner_top">
        <h3>Restaurants</h3>
        <button>show all</button>
    </div>
    <div className="banner_bottom">
        <img src={rasm1} alt="" />
        <img src={rasm1} alt="" />
        <img src={rasm1} alt="" />
        <img src={rasm1} alt="" />
    </div>

</div>
</section>
  )
}

export default Banner
