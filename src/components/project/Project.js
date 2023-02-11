import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section className="project">
        <div className="container">
            <div className="project_top">
                <h1>View our projects</h1>
                <a href="#">View More<i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="project_btm">
                <div className="project_btm_left">
                    <img src="images/project_1.png" alt=""/>
                    <div className="project_btm_left_overlay">
                        <div className="project_btm_overlay_txt">
                            <h4>Workhub office Webflow Webflow Design</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                            <a>View project<i className="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project_btm_right">
                    <div className="project_btm_right_one">
                        <img src="images/project_2.png" alt=""/>
                        <div className="project_btm_right_overlay">
                            <div className="project_btm_overlay_txt low_padding">
                                <h4>Unisaas Website Design</h4>
                                <a>View portfolio<i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="project_btm_right_two">
                        <img src="images/project_3.png" alt=""/>
                        <div className="project_btm_right_overlay">
                            <div className="project_btm_overlay_txt low_padding">
                                <h4>Unisaas Website Design</h4>
                                <a>View portfolio<i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project