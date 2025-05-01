import React from 'react';
import {
  FaHome,
  FaUtensils,
  FaPhoneAlt,
  FaInfoCircle,
  FaUserTie,
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaEnvelope
} from 'react-icons/fa';

const navigationLinks = [
  [
      { name: 'Home', icon: <FaHome />, href: '#' },
      { name: 'About Us', icon: <FaInfoCircle />, href: '#' },
      { name: 'Contact', icon: <FaPhoneAlt />, href: '#' },
      { name: 'Menu', icon: <FaUtensils />, href: '#' },
  ],
  [
      { name: 'Home', icon: <FaHome />, href: '#' },
      { name: 'About Us', icon: <FaInfoCircle />, href: '#' },
      { name: 'Contact', icon: <FaPhoneAlt />, href: '#' },
      { name: 'Menu', icon: <FaUtensils />, href: '#' },
  ],
  [
      { name: 'Home', icon: <FaHome />, href: '#' },
      { name: 'About Us', icon: <FaInfoCircle />, href: '#' },
      { name: 'Contact', icon: <FaPhoneAlt />, href: '#' },
      { name: 'Menu', icon: <FaUtensils />, href: '#' },
  ],
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
        <div className='logo'><img src='/img/logo.png' alt='logo'/></div>
          <p className="footer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Navigation</h3>
          <div className="footer-columns">
            {navigationLinks.map((group, index) => (
              <ul key={index} className="footer-links">
                {group.map((link, i) => (
                  <li key={i}>
                    {link.icon}
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Contact</h3>
          <p className="footer-contact"><FaPhoneAlt className="icon" /> 123-456-7890</p>
          <p className="footer-contact"><FaMapMarkerAlt className="icon" /> Orangi Town, Karachi</p>
          <p className="footer-contact"><FaEnvelope className="icon" /> support@mojapizza.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2023 MAESTRO PIZINNI
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
