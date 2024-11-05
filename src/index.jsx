import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from "./About.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import Errorr from './Error.jsx';
import Bottomnavfunction from './Bottom_navigation.jsx';
import Bnav from './Bottom_nav.jsx';
import Arcomponents from './Augmented_Reality/ar.jsx';
import Booking from './Booking/Book.jsx';
import Assistant from './Assitants/Ass';
import Account from './Account/Account';
import Book from './Booking/Book.jsx';
import Billfunction from './Booking/bills.jsx';
import Childdd from './Assitants/Child.jsx';
import Timeanddate from './Booking/time.jsx';
import Accc from "./AC/Acc.jsx";
import Clean from "./Cleaning/Cleaning.jsx";
import Painter from "./Painter/Painter.jsx";
import Plumb from "./Plumber/Plumber.jsx";
import Salonss from "./Salons/Salons.jsx";
import Login from "./login/loginpage.jsx"
import ComingSoon from './comingsoon.jsx';
createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/error' element={<Errorr />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/ar" element={<Arcomponents />} />
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/assistant" element={<Assistant />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/electrician" element={<Book/>}></Route>
        <Route path='*' element={<Errorr/>}></Route>
        <Route path='/bill' element={<Billfunction></Billfunction>}></Route>
        <Route path='/child' element={<Childdd></Childdd>}></Route>
        <Route path="/time" element={<Timeanddate></Timeanddate>}></Route>
        <Route path='/painter' element={<Painter></Painter>}></Route>
        <Route path='/salons' element={<Salonss></Salonss>}></Route>
        <Route path='/plumber' element={<Plumb></Plumb>}></Route>
        <Route path="/cleaning" element={<Clean></Clean>}></Route>
        <Route path='/acc' element={<Accc></Accc>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/comingsoon" element={<ComingSoon></ComingSoon>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)
