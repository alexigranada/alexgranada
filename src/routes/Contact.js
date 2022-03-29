import React from 'react'


import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='CONTACTO' text='Contactame '/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact