import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>PROTOTIPO SIGLA</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>TRABAJO DE GRADO</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>MISIÓN TIC 2022</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>- 3 Days -</p>
                <p>- Views -</p>
                <p>- Featured -</p>
                <p>- Private Quarters -</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing