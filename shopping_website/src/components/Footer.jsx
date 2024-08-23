import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-columns">
        <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>Feedbacks</a></li>
                <li><a href=''>About Us </a></li>
            </ul>
        </div>

        <div className="footer-column">
            <h3>Menu</h3>
            <ul>
                <li><a href=''>Men's Wear</a></li>
                <li><a href=''>Women's Wear</a></li>
                <li><a href=''>Kids's Wear</a></li>
            </ul>
        </div>

        <div className="footer-column">
            <h3>Contact Us</h3>
            <address>
            123 Fashion St, Style City, F12345<br />
            Phone: (123) 456-7890<br />
            Email: contact@fashionstore.com
           </address>
           <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>


        </div>
        
        <div className="copyright">
            Copyright © Finagle Lanka (Pvt) Ltd || all rights reserved
        </div>


    </div>
  )
}

export default Footer
