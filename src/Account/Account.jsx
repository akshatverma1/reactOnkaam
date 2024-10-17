import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import "./Account.css";
import { Link } from 'react-router-dom';
import Breakline from "../BreakLine.jsx";

export default function Account() {
    return (
        <>
            <div className='mainaccount'>
                <h1>Acccount</h1>
                <Breakline></Breakline>
                <div className='sectionss'>
                    <div className='iconss'>
                    <i  class="fa-regular fa-address-card fa-2xs"></i>
                    </div>
                    <Link to="/about">
                        <h3>About Onkaam</h3>
                    </Link>
                </div>
                <div className='sectionss'>
                    <div className='iconss'><i class="fa-regular fa-user"></i></div>
                
                    <Link to="/login">
                        <h3>Login</h3>
                    </Link>
                </div>
                <div className='sectionss'>
                    <div className='iconss'><i class="fa-solid fa-circle-exclamation"></i></div>
                    <Link to="/login">
                        <h3>Help</h3>
                    </Link>
                </div>
                <div className='sectionss'>
                    <div className='iconss'><i class="fa-regular fa-address-card fa-2xs"></i></div>
                    
                    <Link to="/login">
                        <h3>Support</h3>
                    </Link>
                </div>
            </div>
            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}