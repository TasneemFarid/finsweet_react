import React from 'react'
import './footer_btm.css'

const Footer_btm = () => {
  return (
    <section className="footer_btm">
        <div className="container">
            <div className="footer_btm_items">
                <div className="copyright">
                    <p>Copyright 2022, Finsweet.com</p>
                </div>
                <div className="footer_menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer_btm