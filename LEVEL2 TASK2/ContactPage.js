import React from 'react';
import './ContactPage.css'; 
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const toggleMenu = () => {
    const menuElement = document.getElementById('header-right-menu');
    if (menuElement.style.display === 'block') {
      menuElement.style.display = 'none';
    } else {
      menuElement.style.display = 'block';
    }
  };

  return (
    <div className="container">
      <div className="header-content">
        <a href="/">HireNest</a>
        <span id="menu-icon" onClick={toggleMenu}>
          <img src="images/menu.svg" alt="menu icon" />
        </span>
        <span id="header-right-menu">
          <Link to="/Services">Services</Link>
        </span>
      </div>
      <div className="inner-container">
        <div className="tile1">
          <div className="tile1-heading">Contact Us</div>
          <div className="form-row">We are here for you! How can we help?</div>
          <form>
            <div className="form-row">
              <input type="text" className="form-field" placeholder="Enter your name" />
            </div>
            <div className="form-row">
              <input type="text" className="form-field" placeholder="Enter your email address" />
            </div>
            <div className="form-row">
              <textarea className="form-field" placeholder="Go ahead, we are listening..."></textarea>
            </div>
            <div className="form-row">
              <input type="button" className="form-field btn" value="Submit" />
            </div>
          </form>
        </div>
        <div className="tile2">
          <div className="tile2-image">
            <img
              src="https://th.bing.com/th/id/OIP.KbXBV_xRcvoEPryjoSyezAHaHK?w=195&h=188&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="Contact"
            />
          </div>
          <div>
            <div className="form-row">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4942/4942358.png"
                className="contact-image"
                alt="location"
              />
              <span>193 Barkavi Avenue</span>
            </div>
            <div className="form-row">
              <img
                src="https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png"
                className="contact-image"
                alt="phone"
              />
              <span>+466727723666</span>
            </div>
            <div className="form-row">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/754/835/non_2x/gmail-logo-google-product-icon-of-logotype-gmail-editorial-illustration-free-vector.jpg"
                className="contact-image"
                alt="email"
              />
              <span>contact@HireNest.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
