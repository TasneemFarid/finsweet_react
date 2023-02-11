import React from 'react'

const BlogItem = (props) => {
  return (
    <div className="blog_item">
        <img src={props.pic} alt=""/>
        <h4>{props.date}</h4>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href="#">{props.link}<i className={props.icon}></i></a>
    </div>
  )
}

export default BlogItem