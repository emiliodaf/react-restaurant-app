import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';
import { BsFillCartCheckFill } from "react-icons/bs";

const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Unique and delicious desserts</h1>
					<p>
					    Close to downtown Los Angeles.A Local Favorite for 50+ years. 
						Featuring our famous DeAngelis donuts ice cream and our cakes. 
						Full menu offered all day and late night with
						entertainment on weekends. 
					</p>
					<div className="btn"><BsFillCartCheckFill/>Book now</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;