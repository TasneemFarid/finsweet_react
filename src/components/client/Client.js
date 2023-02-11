import React from 'react'
import Slider from "react-slick";
import './client.css'
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="next" onClick={onClick}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    );
  }
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="prev" onClick={onClick}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
    );
  }


const Client = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

  return (
    <section className="client">
        <div className="container">
            <div className="client_item">
                <div className="client_left">
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="client_right" >
                    <Slider {...settings}>
                        <div>
                        <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
                        <div className="client_quote">
                            <img src="images/client.png" alt=""/>
                            <div className="client_quote_text">
                                <h3>Jenny Wilson</h3>
                                <h4>Vice President</h4>
                            </div>
                        </div>
                        </div>
                        <div>
                        <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
                        <div className="client_quote">
                            <img src="images/client.png" alt=""/>
                            <div className="client_quote_text">
                                <h3>Jenny Wilson</h3>
                                <h4>Vice President</h4>
                            </div>
                        </div>
                        </div>
                        <div>
                        <q>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</q>
                        <div className="client_quote">
                            <img src="images/client.png" alt=""/>
                            <div className="client_quote_text">
                                <h3>Jenny Wilson</h3>
                                <h4>Vice President</h4>
                            </div>
                        </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Client