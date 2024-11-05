import React from 'react';
import Navbarfunction from './Navbar';
import Footerfunction from './Footer';
import Bottomnavfunction from './Bottom_nav';
import Servicesfunction from './Services';
import BreakLO from './BreakLine';
import Search from "./importstyle/searchbar.jsx"
import Airfunction from './Aircon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Errorr from './Error';
import Bnav from './Bottom_nav';
import Locatdect from './Location';
import Booking from './Booking/Book';
import ParentComponent from './Assitants/Paresnt';
import ARFurniture from './Arreact.jsx';
import "./HomePage.css";
export default function homepageFunction() {
    return (
        <div>
            <Navbarfunction></Navbarfunction>
            <Servicesfunction></Servicesfunction>
            <BreakLO></BreakLO>
            <div className='connn'>

                <div class="card">
                    <div class="card_load"></div>
                    <div class="card_load_extreme_title"></div>
                    <div class="card_load_extreme_descripion"></div>
                </div>
               
            </div>
            <h1>Comming Soon...</h1>
            <Bottomnavfunction></Bottomnavfunction>
            <ARFurniture></ARFurniture>
            <Footerfunction></Footerfunction>
        </div>
    )
}
