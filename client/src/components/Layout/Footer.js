import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <h3 className='text-center'>
                All Rights Reserved &copy; 2024
            </h3>
            <p className="text-center mt-3">
                <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
                <Link to="/policy">Privacy Policy</Link>
            </p>
            <p className='text-center'>Made with ❤ by<Link to="https://ishaangaba.netlify.app/" target='_blank'>Ishaan Gaba</Link> </p>
        </div>
    )
}

export default Footer