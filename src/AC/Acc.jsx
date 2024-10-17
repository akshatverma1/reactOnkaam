import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "../Booking/Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
import Itemfunction from '../Booking/items.jsx';
import Sample from "../assets/acweb.webp";
import Linee from '../Booking/line.jsx';

export default function Booking() {
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1.5rem", fontSize: "28px" };
    let stye = { fontWeight: 900 };
    return (
        <>

            <div className='elemain'>
                <div className='electricianc'>
                    <Link to="/">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>AC Repair and Services</h3>
                </div>
                <Breakline></Breakline>
                {/* <div>
                    <h3 style={sty}>Switch & Socket</h3>
                    <Itemfunction Itemname="power saver AC service" rating="4.8 (16k reviews)" prices="599" image={Power}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Anti-rust deep clean AC service" rating="4.8 (16k reviews)" prices="899" image={Anti}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Lite AC service" rating="4.8 (16k reviews)" prices="499" image={Lite}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="AC repair" rating="4.8 (16k reviews)" prices="299" image={AC1}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="AC Gas leak fix &refill" rating="4.8 (16k reviews)" prices="2500" image={AC2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="AC installation" rating="4.8 (16k reviews)" prices="799" image={ACI}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="AC uninstallation" rating="4.8 (16k reviews)" prices="499" image={ACU}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="5797" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div> */}
            </div>

            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}