import React from 'react';
import "./About.css"

import Bottomnavfunction from './Bottom_nav';
import BreakLO from './BreakLine';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';

export default function Aboutfunction() {
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1.5rem", fontSize: "28px" };
    let stye = { fontWeight: 900 };
    return (
        <div>
            <div className='electricianc'>
                    <Link to="/">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>About</h3>
                </div>
                <BreakLO></BreakLO>
            <header>
                <h1 style={{marginTop:"0.5rem",fontWeight:700}}>Welcome to Onkaam</h1>
                <p style={{margin:0}}>Your trusted platform for home services</p>
            </header>

            <section id="overview">
                <h2>What is Onkaam?</h2>
                <p>
                    Onkaam is a reliable platform that connects users with skilled professionals who can provide home services such as appliance repair, plumbing, painting, electrical work, and many more. Our platform ensures quick and convenient access to vetted professionals who are ready to tackle your home maintenance needs with efficiency and reliability.
                </p>
            </section>

            <section id="features">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Easy Booking:</strong> Schedule services with just a few clicks through our user-friendly app interface.</li>
                    <li><strong>Wide Range of Services:</strong> From appliance repairs to plumbing, painting, and electrical work – we cover all your home service needs.</li>
                    <li><strong>Vetted Professionals:</strong> We ensure that every technician and service provider is thoroughly screened for quality and reliability.</li>
                    <li><strong>Transparent Pricing:</strong> No hidden charges! Get a clear view of the service charges upfront.</li>
                    <li><strong>Innovative Tools:</strong> Onkaam integrates Augmented Reality (AR) to provide more accurate and efficient solutions.</li>
                </ul>
            </section>

            <section id="services">
                <h2>Services Offered</h2>
                <div class="service-item">
                    <h3>Appliance Repair</h3>
                    <p>Our certified technicians provide reliable repair services for all types of home appliances, including refrigerators, washing machines, ovens, and more.</p>
                </div>
                <div class="service-item">
                    <h3>Plumbing</h3>
                    <p>From leaky faucets to major pipe repairs, our skilled plumbers are ready to solve all your plumbing issues.</p>
                </div>
                <div class="service-item">
                    <h3>Electrical Work</h3>
                    <p>Our licensed electricians ensure that all your electrical systems are functioning safely and efficiently.</p>
                </div>
                <div class="service-item">
                    <h3>Painting</h3>
                    <p>Give your home a fresh look with our expert painting services, including both interior and exterior projects.</p>
                </div>
                <div class="service-item">
                    <h3>Cleaning Services</h3>
                    <p>Professional cleaning services for your home, including deep cleaning, carpet cleaning, and more.</p>
                </div>
            </section>

            <section id="why-onkaam">
                <h2>Why Choose Onkaam?</h2>
                <p>
                    Onkaam offers the ultimate convenience when it comes to managing your home’s upkeep. We ensure a hassle-free experience by providing users with:
                </p>
                <ul>
                    <li>Comprehensive service options – no matter the task, we have the professionals to get it done.</li>
                    <li>Quick and easy booking through our mobile app or website.</li>
                    <li>Verified and trained professionals for high-quality services.</li>
                    <li>Transparent pricing – no surprise charges!</li>
                    <li>Efficient customer support – we're here to assist you every step of the way.</li>
                    <li>Tech-forward solutions with AR for enhanced accuracy in service delivery.</li>
                </ul>
            </section>

            <section id="ar-tools">
                <h2>Augmented Reality (AR) Tools</h2>
                <p>
                    Onkaam leverages innovative AR technology to offer precise solutions for your home. By using AR tools, our professionals can better diagnose problems remotely and provide you with a more accurate estimate before the service is carried out. This forward-thinking approach allows us to streamline our services and minimize errors, ensuring you get the best experience possible.
                </p>
            </section>

            <section id="testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>
                    "Onkaam made my home maintenance so easy! The booking process was quick, and the technician who fixed my refrigerator was professional and efficient."
                    <cite>- Sarah J.</cite>
                </blockquote>
                <blockquote>
                    "I’ve used Onkaam for plumbing and electrical work, and both times the service was top-notch. I especially love the transparent pricing and reliable professionals!"
                    <cite>- David L.</cite>
                </blockquote>
            </section>

            <footer>
                <p>&copy; 2024 Onkaam - Home Services Simplified</p>
            </footer>
            <Bottomnavfunction></Bottomnavfunction>
        </div>
    )
}