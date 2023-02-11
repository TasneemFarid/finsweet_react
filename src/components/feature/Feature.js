import React from 'react'
import FeatureItem from '../../reusableComponents/FeatureItem'
import './feature.css'

const Feature = () => {
  return (
    <section className="feature">
        <div className="container">
            <div className="feature_head">
                <h4>Features</h4>
                <h3>Design that solves problems, one product at a time</h3>
            </div>
            <div className="feature_btm">
                <FeatureItem icon="images/f_icon1.png" title="Uses Client First" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <FeatureItem icon="images/f_icon2.png" title="Two Free Revision Round" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <FeatureItem icon="images/f_icon3.png" title="Template Customization" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <FeatureItem icon="images/f_icon4.png" title="24/7 Support" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <FeatureItem icon="images/f_icon5.png" title="Quick Delivery" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
                <FeatureItem icon="images/f_icon6.png" title="Hands-on approach" text="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            </div>
        </div>
    </section>
  )
}

export default Feature