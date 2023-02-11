import React from 'react'

const Workright = (props) => {
  return (
    <div style={{marginBottom: "50px"}} className="work_right_item">
        <img src={props.image}/>
        <h3>{props.title}</h3>
        <p>{props.para}</p>
        </div>
  )
}

export default Workright