import React from 'react';

const Hire = () => {
	return (
		<div id="hire">
			<h2>Catering Form</h2>
			<p>Please describe your catering needs.</p>
			<form>
				<label> Name: </label>
				<input name="name" type="text" />
				<label> Email: </label>
				<input name="email" type="text" />
				<label> Phone Number: </label>
				<input name="phone" type="text" />
				<label> Date of Event: </label>
				<input name="dateEvent" type="text" />
				<label> Time of Event: </label>
				<input name="timeEvent" type="text" />
				<label> Event Location: </label>
				<input name="location" type="text" />
				<label> Number of Guests: </label>
				<input name="guests" type="text" />
				<label> Message: </label>
				<input name="message" type="text" />
				<button>Send Message</button>
			</form>
		</div>
	);
};

export default Hire;
