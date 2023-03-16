

import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './NavBar.scss'

function NavBar() {
    const navigate=useNavigate();
    return (
        <div className='nav'>
            <div className="logodiv">
                <Logo />
            </div>

            <div className='right'>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')}  className='btn'>Register</button>
                <button style={{ cursor: 'pointer' }} onClick={() => navigate('/candidate/signin')} className='btn'>Sign In</button>
            </div>
        </div>
    )
}

export default NavBar