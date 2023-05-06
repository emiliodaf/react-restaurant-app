import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/favourite.png';
import { BsFillCartCheckFill } from "react-icons/bs";


const Favorite = () => {
	return (
		<div className="favContainer">
			<h2>Favorite</h2>

			<div className="favContent">
				<Slide left>
					<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p> 
						This cake celebrates all the classic strawberry combinations, like a greatest hits album, 
						but way more delicious!
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn"><BsFillCartCheckFill/>Order Now</button>
		</div>
	);
};

export default Favorite;