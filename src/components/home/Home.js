import React, { useState } from 'react';
import './Home.css';
import { MdContactMail } from "react-icons/md";
import logo from '../../assests/logo.png';
import businessGif from '../../assests/business.gif';
import billingGif from '../../assests/billing.gif';
import websitesGif from '../../assests/website.gif';
import jobsGif from '../../assests/job.gif';
import ContactUs from '../contactus/ContactUs';
import "@fontsource/poppins";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav>
          <ul>
            <li className="business-rasta">
              <span>A</span>&nbsp;<span> </span><span>C</span><span>O</span><span>M</span><span>P</span><span>L</span><span>E</span><span>T</span><span>E</span>&nbsp;<span> </span>
              <span>M</span><span>U</span><span>L</span><span>T</span><span>I</span><span>P</span><span>L</span><span>E</span><span> </span>&nbsp;&nbsp;
              <span>B</span><span>U</span><span>S</span><span>I</span><span>N</span><span>E</span><span>S</span><span>S</span><span> </span>&nbsp;
              <span>P</span><span>L</span><span>A</span><span>T</span><span>F</span><span>O</span><span>R</span><span>M</span>
            </li>
            <li><a href="#contact" onClick={openModal}><MdContactMail className='icon' /> Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <div className="logo-card">
          <img src={businessGif} alt="Business Registration" className="animated-icon" />
          <h3>Business Registration</h3>
        </div>
        <div className="logo-card">
          <img src={billingGif} alt="Billing Software" className="animated-icon" />
          <h3>Billing Software</h3>
        </div>
        <div className="logo-card">
          <img src={websitesGif} alt="Websites & Applications" className="animated-icon" />
          <h3>Websites & Applications</h3>
        </div>
        <div className="logo-card">
          <img src={jobsGif} alt="Jobs" className="animated-icon" />
          <h3>Jobs</h3>
        </div>
      </div>

      {modalIsOpen && (
        <ContactUs closeModal={closeModal} />
      )}
    </div>
  );
}

export default Home;
