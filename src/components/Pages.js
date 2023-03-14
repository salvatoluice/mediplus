import React from 'react'
import Header from '../common/header/Header'
import About from './about/About'
import Cta from './cta/Cta'
import Float from './float/Float'
import Footer from './footer/Footer'
import News from './news/News'
import Services from './services/Services'
import Team from './team/Team'
import Tips from './tips/Tips'

const Pages = () => {
  return (
    <div>
      <Header />
      <Float />
      <About />
      <Services />
      <Team />
      <Tips />
      <Cta />
      <News />
      <Footer />
    </div>
  )
}

export default Pages
