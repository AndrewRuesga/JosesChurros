import React from 'react';
import Navbar from './Navbar';

/****PNG IMAGES****/
import logo from '../images/joseschurros.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Contact = () => {
	return (
		<div id="contact">
			<div className="logoContact">
				<img className="logo" alt="" src={logo} />

				<div className="contact">
					<p>(760) 583-8869</p>
					<p>joses8869@yahoo.com</p>
					<p>@joses_churros</p>
					<a
						rel="noreferrer"
						href="https://www.facebook.com/people/Joses-Churros/100074888466651/"
						target="_blank"
					>
						<img alt="" src={facebook} />
					</a>
					<a
						rel="noreferrer"
						href="https://www.instagram.com/joses_churros/"
						target="_blank"
					>
						<img alt="" src={instagram} />
					</a>
				</div>
			</div>

			<Navbar />
		</div>
	);
};

export default Contact;
