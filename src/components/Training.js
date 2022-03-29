import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Web Processing Service</h1>
                <p>El servicio WPS permite realizar calculos y procesos Geoespaciales a traves de una plataforma web, con el objetivo de dar funcionalidad a los SIG.</p>
                <Link to='/contact'><button className='btn'>Leer Más</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Training