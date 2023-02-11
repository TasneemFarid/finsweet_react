import React from 'react'
import BlogItem from '../../reusableComponents/BlogItem'
import './blog.css'

const Blog = () => {
  return (
    <section className="blog">
    <div className="container">
        <div className="blog_head">
            <h3>Our blog</h3>
        </div>
        <div className="blog_bttm">
            <BlogItem pic="images/blog_1.png" date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" link="Read More" icon="fa-solid fa-arrow-right-long"/>
            <BlogItem pic="images/blog_2.png" date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" link="Read More" icon="fa-solid fa-arrow-right-long"/>
            <BlogItem pic="images/blog_3.png" date="19 Jan 2022" title="How one Webflow user grew his single person consultancy from $0-100K in 14 months" text="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract" link="Read More" icon="fa-solid fa-arrow-right-long"/>
        </div>
    </div>
</section>
  )
}

export default Blog