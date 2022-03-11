import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Contact = () => {
	return (
		<div id="contact">
			<h2>Contact</h2>
			<p>(760) 583-8869</p>
			<p>joses8869@yahoo.com</p>
			<div className="contactInfo">
				<img alt="" src={facebook} />
				<img alt="" src={instagram} />
			</div>
		</div>
	);
};

export default Contact;
