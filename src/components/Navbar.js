import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import LoadingBar from 'react-top-loading-bar';
import './NavbarStyles.css'

const Navbar = () => {

    const [click, SetClick] = useState(false)
    const handleClick = () => SetClick(!click)
    const [color, setColor] = useState(false)
        const changeColor = () =>{
            if(window.scrollY >=100){
                setColor(true)
            }else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
        <Link to='/' ><h1>GIService</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/training'>Blog</Link>
            </li>
            <li>
                <Link to='/pricing'>Portafolio</Link>
            </li>
            <li>
                <Link to='/contact'>Contacto</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#FFF'}}/>):(<FaBars size={20} style={{color: '#FFF'}}/>)}
        </div>
    </div>
  )
}

export default Navbar