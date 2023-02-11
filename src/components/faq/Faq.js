import React, { useState } from 'react'
import './faq.css'

const Faq = () => {

    let [accordian, setAccordian] = useState([
        {
            title: "How much time does it take?",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: true,
        },
        {
            title: "How much time does it take?",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false,
        },
        {
            title: "How much time does it take?",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false,
        },
        {
            title: "How much time does it take?",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false,
        },
        {
            title: "How much time does it take?",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            status: false,
        },
    ]);

    let handleAccordian = (id)=> {
        accordian.map((item,index)=>{
            if(id==index){
                item.status = true;
                setAccordian([...accordian])
            }else{
                item.status = false;
                setAccordian([...accordian])
            }
        });
    };
  return (
    <section className="faq">
        <div className="container">
            <div className="faqs">
                <div className="faq_left">
                    <h3>Frequently asked questions</h3>
                    <a href="#">Contact us for more info</a>
                </div>
                <div className="faq_right">
                    {accordian.map((item, index) => (
                        <div className="faq_item" onClick={()=>handleAccordian(index)}>
                        <h4>{index > 10 ? index+1 : `0${index+1}`}</h4>
                        <div className="faq_text">
                            <div className="faq_top_text">
                                <h4>{item.title}</h4>
                                {item.status ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-plus"></i>}
                            </div>
                            {item.status && <p>{item.details}</p>}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq