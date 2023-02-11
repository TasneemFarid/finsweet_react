import React from 'react'
import Banner from '../components/banner/Banner';
import Blog from '../components/blog/Blog';
import Client from '../components/client/Client';
import Faq from '../components/faq/Faq';
import Feature from '../components/feature/Feature';
import Footer_btm from '../components/footer_btm/Footer_btm';
import Footer_top from '../components/footer_top/Footer_top';
import Inquiry from '../components/inquiry/Inquiry';
import Navbar from '../components/navbar/Navbar';
import Project from '../components/project/Project';
import Work from '../components/work/Work';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Work/>
    <Project/>
    <Feature/>
    <Client/>
    <Faq/>
    <Inquiry/>
    <Blog/>
    <Footer_top/>
    <Footer_btm/>
    </>
  )
}

export default Home