import React from 'react';
import './Footer.css';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerColumn">
				<h4>Social Media</h4>
				<div className='socialIcon'>
				  <a href='/' className='socialIconLinktube'><FaYoutube/>Youtube</a>
				</div>
				<div className='socialIcon'>
				  <a href='/' className='socialIconLinkedin'><FaLinkedin/>Linkedin</a>
				</div>
				<div className='socialIcon'>
				  <a href='/' className='socialIconLinkins'><FaInstagram/>Instagram</a>
				</div>		
			</div>
			<div className="footerColumn">
				<h4>About</h4>
				<div>Contact us</div>
				<div>Careers</div>
			</div>
			<div className="footerColumn">
				<h4>Location</h4>
				<div>Los Angeles</div>
				<div>New-York</div>
				<div>Roma</div>
			</div>
		</div>
	);
};

export default Footer;