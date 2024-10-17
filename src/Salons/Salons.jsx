import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "../Booking/Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
import Itemfunction from '../Booking/items.jsx';
import Sample from "../assets/acweb.webp";
import Linee from '../Booking/line.jsx';
import Linee from "";
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
                    <h2 style={stye}>Men and Women Salons</h2>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>BestSeller Packages</h3>
                    <Itemfunction Itemname="Full chocolate wax" rating="4.8 (16k reviews)" prices="949" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Honey Waxing" rating="4.8 (16k reviews)" prices="649" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Fcae wax" rating="4.8 (16k reviews)" prices="59" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Waxing , Facial & Face wax" rating="4.8 (16k reviews)" prices="2449" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="waxing & Hair care" rating="4.8 (16k reviews)" prices="999" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Manicure & Pedicure" rating="4.8 (16k reviews)" prices="1500" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Make your Package</h3>
                    <Itemfunction Itemname="Customise package " rating="4.8 (16k reviews)" prices="2600" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Waxing</h3>
                    <Itemfunction Itemname="Full Arms" rating="4.8 (16k reviews)" prices="299" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Half Arms" rating="4.8 (16k reviews)" prices="199" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Full legs" rating="4.8 (16k reviews)" prices="359" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="half leg" rating="4.8 (16k reviews)" prices="180" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Underarms" rating="4.8 (16k reviews)" prices="49" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bikini wax" rating="4.8 (16k reviews)" prices="999" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Back wax" rating="4.8 (16k reviews)" prices="449" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Stomach wax" rating="4.8 (16k reviews)" prices="299" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bikini line wax" rating="4.8 (16k reviews)" prices="249" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Manicure & Pedicure</h3>
                    <Itemfunction Itemname="Elysian British rose pedicure" rating="4.8 (16k reviews)" prices="699" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian chocolate & venilla pedicure" rating="4.8 (16k reviews)" prices="959" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Foot massage" rating="4.8 (16k reviews)" prices="199" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Cut , File & polish" rating="4.8 (16k reviews)" prices="1049" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian British rose menicure" rating="4.8 (16k reviews)" prices="699" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="cut , file & polish" rating="4.8 (16k reviews)" prices="249" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian chocolate & venilla manicure" rating="4.8 (16k reviews)" prices="899" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="crayon manicure" rating="4.8 (16k reviews)" prices="799" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Facial & Cleanup</h3>
                    <Itemfunction Itemname="Glovite lightening facial" rating="4.8 (16k reviews)" prices="1099" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+shine & glow" rating="4.8 (16k reviews)" prices="1699" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian firming wine glow" rating="4.8 (16k reviews)" prices="1199" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ power brightening facial" rating="4.8 (16k reviews)" prices="1999" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Sara fruit cleanup" rating="4.8 (16k reviews)" prices="699" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ tan clear cleanup" rating="4.8 (16k reviews)" prices="899" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ feel youthful facial" rating="4.8 (16k reviews)" prices="1599" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Hair care</h3>
                    <Itemfunction Itemname="Head massage " rating="4.8 (16k reviews)" prices="349" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Hair colour / mahandi" rating="4.8 (16k reviews)" prices="299" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Loreal hair spa" rating="4.8 (16k reviews)" prices="1249" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Hair wash" rating="4.8 (16k reviews)" prices="499" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Bleach & detan</h3>
                    <Itemfunction Itemname="Detan " rating="4.8 (16k reviews)" prices="399" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bleach" rating="4.8 (16k reviews)" prices="349" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Threading & Face waxing</h3>
                    <Itemfunction Itemname="Threading & Face waxing " rating="4.8 (16k reviews)" prices="79" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Face waxing" rating="4.8 (16k reviews)" prices="69" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
            </div>

            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}