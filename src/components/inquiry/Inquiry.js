import React from 'react'
import './inquiry.css'

const Inquiry = () => {
  return (
    <section className="inquiry">
        <div className="container">
            <div className="inquiry_item">
                <div className="inquiry_left">
                    <img src="images/inquiry.png" alt=""/>
                    <div className="inquiry_left_img_overlay">
                        <h3>Building stellar websites for early startups</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                    </div>
                </div>
                <div className="inquiry_right">
                    <h4>Send inquiry</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Paste your Figma design URL"/>
                    <button>Send an Inquiry</button>
                    <a href="#">Get in touch with us<i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inquiry