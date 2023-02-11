import React from 'react'
import Footer_btm from '../components/footer_btm/Footer_btm'
import Footer_top from '../components/footer_top/Footer_top'
import Navbar from '../components/navbar/Navbar'
import ReadBlog from '../components/readBlog/ReadBlog'

const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <ReadBlog/>
    <Footer_top/>
    <Footer_btm/>
    </>
  )
}

export default BlogPage