import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "../Booking/Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
import Itemfunction from '../Booking/items.jsx';
import Sample from "../assets/acweb.webp";
import Linee from '../Booking/line.jsx';
import Power from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fwe-can-handle-your-hvac-needs-air-conditioner-repair-clipart-400x422-png-clipart-download-clipartmaxcom-in-2022--644296290458769552%2F&psig=AOvVaw2AiQFdOsJMA94pu7Lt6I6T&ust=1729234192498000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiZ_8HplIkDFQAAAAAdAAAAABAE";
import Anti from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcleaning-cartoon&psig=AOvVaw0Rv8s4PLx8ZW3W1sdG8-D8&ust=1729234421648000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOi22s7qlIkDFQAAAAAdAAAAABAE";
import Lite from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Finstallation-ac%3Fpage%3D8&psig=AOvVaw0A50VPxxF5-w87G6LlW_bW&ust=1729234566227000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJCt3PLqlIkDFQAAAAAdAAAAABAE";
import AC1 from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvector%2Fprofessional-air-conditioners-service-and-repair-gm1194483830-340143320&psig=AOvVaw1ohupjypI9sAjmRIZ0Iv04&ust=1729234614360000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICQ1IvrlIkDFQAAAAAdAAAAABAE";
import AC2 from "https://www.google.com/url?sa=i&url=https%3A%2F%2Facesindia.in%2Fproducts%2Fac-gas-leak-fix-refill-service&psig=AOvVaw3kXXwwguVhLF107aj01QKf&ust=1729234666477000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC46aTrlIkDFQAAAAAdAAAAABAE";
import ACI from "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ffree-lottie-animation%2Fac-installation-9617085&psig=AOvVaw128x6ZSlXY1AiS9CbPwArG&ust=1729234736962000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDAtNTrlIkDFQAAAAAdAAAAABAE";
import ACU from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dbhomeappliance.in%2Fair-conditioner%2Fac-uninstallation&psig=AOvVaw2HsOXqnD_YvxIzPRY6OuYq&ust=1729234819524000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCp0frrlIkDFQAAAAAdAAAAABAE";
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
                <div>
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
                </div>
            </div>

            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}