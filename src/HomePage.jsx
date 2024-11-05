/**
 * The `homepageFunction` component in this JavaScript React code renders a homepage layout with a
 * navigation bar, services section, loading cards, a "Coming Soon" message, bottom navigation,
 * augmented reality furniture component, and a footer.
 * @returns The `homepageFunction` component is being returned, which includes JSX elements for a
 * webpage layout. It consists of a navigation bar (`Navbarfunction`), services section
 * (`Servicesfunction`), a break line component (`BreakLO`), a loading card element, a "Coming Soon..."
 * heading, a bottom navigation bar (`Bottomnavfunction`), an AR furniture component (`ARFurniture`),
 * and a
 */
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
import Ani from './animation.jsx';
import "./HomePage.css";
export default function homepageFunction() {
    return (
        <div>
            <Navbarfunction></Navbarfunction>
            <Servicesfunction></Servicesfunction>
            <BreakLO></BreakLO>
            <Ani></Ani>
            <h1>Comming Soon...</h1>
            <Bottomnavfunction></Bottomnavfunction>
            
            <Footerfunction></Footerfunction>
        </div>
    )
}
