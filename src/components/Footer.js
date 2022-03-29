import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={15} style={{color: '#FFF', marginRight: '2rem'}} />
                    <div>
                        <p>Cali, Colombia</p>
                        <h4>Universidad del Valle</h4>    
                    </div>
                </div>
                <div className='phone'>
                    <p><FaPhone size={15} style={{color: '#FFF', marginRight: '1.4rem'}}/> 301 4024326</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={15} style={{color: '#FFF', marginRight: '1.4rem'}}/> granadalexi@gmail.com</p>
                </div>
            </div>
            <div className='right'>
                <h4>Acerca de mi</h4>
                <p>Actual estudiante del grado de Ingeniería Topográfica. Soy un apasionado por el mundo de la tecnología. Me divierto investigando y desarrollando aplicaciones y visores SIG en la web, para comprender y representar datos espaciales de forma visual.</p>
                <div className='social'>
                    <FaGithub size={25} style={{color: '#FFF', marginRight: '1rem'}}/>
                    <FaLinkedin size={25} style={{color: '#FFF', marginRight: '1rem'}}/>
                    <FaFacebook size={25} style={{color: '#FFF', marginRight: '1rem'}}/>
                    <FaTwitter size={25} style={{color: '#FFF', marginRight: '1rem'}}/>
                </div>                
            </div>        
        </div>
        <div className='copy-right'>
            <p>Arturo Alexis Granada Giron</p>
            <p>2020 - {new Date().getFullYear()}</p>
            <p>&copy; All rights Reserved.</p>
        </div>  
    </div>
    

  )
}


export default Footer