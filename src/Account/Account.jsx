import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import "./Account.css";
import { Link } from 'react-router-dom';
import Breakline from "../BreakLine.jsx";
export default function Account(){
    return (
        <>
        <div className='mainaccount'>
            <h1>Acccount</h1>
            <Breakline></Breakline>
            <div className='sectionss'>
            <i class="fa-regular fa-address-card fa-2xs"></i>
            <Link to="/">
            <h3>About Onkaam</h3>
            </Link>
            
            </div>
        </div>
        <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}