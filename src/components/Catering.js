import React, { useEffect, useState } from 'react';
import cartPhoto from '../images/cart.png';
import chocolateChurro from '../images/chocolateChurro.png';
import foodTruck from '../images/FoodTruck.jpeg';

const Catering = () => {
	const [showComponent, setShowComponent] = useState(window.innerWidth > 820);

	useEffect(() => {
		// Function to update the showComponent state based on screen width
		const handleResize = () => {
			setShowComponent(window.innerWidth > 820);
		};

		// Add a listener for window resize events
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return showComponent ? (
		<div id="catering">
			{/* <form action="https://formsubmit.co/joses8869@yahoo.com" method="POST">
				<h2>Our Catering</h2>
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value="https://joses-churros.com/" />
				<label> Name </label>
				<input name="name" type="text" />
				<label> Email </label>
				<input name="email" type="text" required />
				<label> Phone </label>
				<input name="phone" type="text" />
				<label> Date </label>
				<input name="dateEvent" type="text" />
				<label> Location </label>
				<input name="location" type="text" />
				<label> Guests </label>
				<input name="guests" type="text" />
				<label> Comments </label>
				<textarea className="comments" rows="3" name="message" type="text" />
				<button type="submit">Request a Quote</button>
				<p style={{ marginBottom: 0 }}>Two Hour Event & 50 People Minimum,</p>
				<p style={{ marginTop: 0, marginBottom: 0 }}>
					20% Deposit Required, Non-Refundable
				</p>
			</form> */}

			<div>
				<img className="chocolate" alt="" src={chocolateChurro} />
				<img className="cart" alt="" src={cartPhoto} />
				<img className="foodTruck" alt="" src={foodTruck} />
			</div>
		</div>
	) : (
		<></>
	);
};

export default Catering;
