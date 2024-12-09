import React from 'react'
import "../style/location.css"
function Location() {
  return (
 <section className='location'>
<div className="container">
  <div className="location_wrapper">
  <div className="location_right">
        <h3>Your nearest restaurants</h3>
        <p>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
    </div>
    <div className="location_left">
      <input type="text" placeholder='Enter delivery address' />
      <button>send</button>
    </div>
  </div>
  
</div>
 </section>
  )
}

export default Location
