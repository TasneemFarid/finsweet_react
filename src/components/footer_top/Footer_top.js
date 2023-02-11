import React from 'react'
import './footer_top.css'

const Footer_top = () => {
  return (
    <section className="footer_top">
        <div className="container">
            <div className="footer_top_items">
                <div className="footer_top_left">
                    <div className="logo">
                        <img src="images/logo.png" alt=""/>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                    </div>
                    <div className="footer_info">
                        <div className="footer_info_one">
                            <h4>Email me at</h4>
                            <h3>contact@website.com</h3>
                        </div>
                        <div className="footer_info_one">
                            <h4>Call us</h4>
                            <h3>0927 6277 28525</h3>
                        </div>
                    </div>
                </div>
                <div className="footer_top_right">
                    <h3>Lets Talk!</h3>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    <div className="footer_right_icons">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer_top