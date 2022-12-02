import React from 'react'
import '../css/Newsfeed.css'
import Topstories from '../components/Topstories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const Newsfeed = () => {
  return (
    <div>
      <Navbar />
      <Topstories />
      <Footer />
      

    </div>
  )
}

export default Newsfeed