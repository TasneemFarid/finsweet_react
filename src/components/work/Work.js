import React from 'react'
import Workright from '../../reusableComponents/Workright'
import './work.css'

const Work = () => {
  return (
    <section className="work">
    <div className="container">
        <div className="work_items">
            <div className="work_left">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#">Get in touch with us<i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="work_right">
                <Workright title="Strategy" image="images/pointer_1.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workright title="Wireframing" image="images/pointer_2.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workright title="Design" image="images/pointer_3.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <Workright title="Development" image="images/pointer_4.png" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Work