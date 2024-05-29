import React, { useState } from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Hero from './Componenets/Hero/Hero'
import Programs from './Componenets/Programs/Programs'
import Title from './Componenets/Title/Title'
import About from './Componenets/About/About'
import Campus from './Componenets/Campus/Campus'
import Testimonials from './Componenets/Testimonials/Testimonials'
import Contact from './Componenets/Contact/Contact'
import Footer from './Componenets/Footer/Footer'
import VideoPlayer from './Componenets/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState ,setPlayState]= useState(false);
  return (

    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle =' Our PROGRAM' title = 'What we Offer'/>
      <Programs/>
      <About setPlayState={setPlayState} />
      <Title subTitle ='Gallery' title = 'Campus Photos'/>
      <Campus />
      <Title subTitle ='Testimonials' title = 'What students says'/>
      <Testimonials />
      <Title subTitle ='Contact us ' title = 'Get in touch'/>
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    
    </div>
  )
}

export default App
