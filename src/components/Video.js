import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import './VideoStyles.css'

import spaceVideo from '../assets/space2.mp4'

const Video = () => {

  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type ='video/mp4' />
        </video>
        <div className='content'>
            <div className='content-text'>
              <p>Hola mi nombre es</p>
              <h1>ALEX GRANADA</h1>
                <p>Ingeniero en desarrollo SIG 
                  <span style={{ color: 'red', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[' Geomatica', ' Satelital', ' Web/Movil', ' Code']}
                      loop
                      cursor
                      cursorStyle='|'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </p>
            </div>
            <div>
              <Link to='/pricing' className='btn'>Portafolio</Link>
              <Link to='/contact' className='btn btn-light'>contacto</Link>
            </div>
        </div>
    </div>
  )
}

export default Video