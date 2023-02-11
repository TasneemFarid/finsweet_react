import React from 'react'

const FeatureItem = (props) => {
  return (
    <div style={{marginBottom: "30px"}} className="feature_item">
        <img src={props.icon} alt=""/>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default FeatureItem