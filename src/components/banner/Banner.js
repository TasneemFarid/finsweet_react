import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="banner_item">
                <div className="banner_left">
                    <div className="banner_text">
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="banner_btn">
                        <a href="#" className="work_btn">View our work</a>
                        <a href="#" className="price_link">View Pricing<i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className="banner_right">
                    <img src="images/banner.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner