import React from 'react';
import cartPhoto from '../images/cart.png';
import chocolateChurro from '../images/chocolateChurro.png';

const Catering = () => {
	return (
		<div id="catering">
			<form>
				<h2>Our Catering</h2>
				<label> Name </label>
				<input name="name" type="text" />
				<label> Email </label>
				<input name="email" type="text" />
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
				<button>Request a Quote</button>
			</form>
			<div>
				<img className="chocolate" alt="" src={chocolateChurro} />
				<img className="cart" alt="" src={cartPhoto} />
			</div>
		</div>
	);
};

export default Catering;
