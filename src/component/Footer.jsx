import React from 'react'
import "../style/footer.css"
import rasm2 from "../img/appstore.svg"
import rasm3 from "../img/play market.svg"
import rasm4 from "../img/Logo.svg"
import rasm5 from "../img/icon _footer.svg"
function Footer() {
  return (
  <section className='footer'>
<div className="container">
    <div className="footer_top">
        <div className="footer_icon_card">
            <img src={rasm4} alt="" />
     
<span></span>
<img className='img_foot' src={rasm2} alt="" />
<img className='img_foot' src={rasm3} alt="" />
        </div>
        <div className="footer_card">
            <h4>About us</h4>
            <ul>
                <li>Concept</li>
                <li>Concept</li>
                <li>Concept</li>
                <li>Concept</li>
                <li>Concept</li>
            </ul>
        </div>
        <div className="footer_card">
            <h4>About us</h4>
            <ul>
                <li>Read FAQs</li>
                <li>Read FAQs</li>
                <li>Read FAQs</li>
                <li>Read FAQs</li>
                <li>Read FAQs</li>
            
            </ul>
        </div>
        <div className="footer_card">
            <h4>About us</h4>
            <ul>
                <li>Yellow kitchen Paris 11</li>
                <li>Yellow kitchen Paris 11</li>
                <li>Yellow kitchen Paris 11</li>
                <li>Yellow kitchen Paris 11</li>
                <li>Yellow kitchen Paris 11</li>
            
            </ul>
        </div>
    </div>
    <div className="footer_bottom">
    <div className="footer_ic">
        <img src={rasm5} alt="" />
    </div>

        <div className="footer_ul">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>© 2020 Yellow kitchen</span>
        </div>
    </div>
</div>
  </section>
  )
}

export default Footer
