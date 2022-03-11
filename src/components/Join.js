import React from 'react';

const Join = () => {
	return (
		<div id="join">
			<h2>Join Us</h2>
			<p>
				Interested in becoming apart of the team? Sign up below and one of our
				team members will get back to you as soon as possible.
			</p>
			<form>
				<label htmlFor="firstName">First Name:</label>
				<input name="firstName" type="text" />
				<label htmlFor="lastName">Last Name:</label>
				<input name="lastName" type="text" />
				<label> Phone Number:</label>
				<input name="phone" type="text" />
				<label htmlFor="email">Email:</label>
				<input name="email" type="text" />
				<label htmlFor="password">Password:</label>
				<input name="password" type="password" />

				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};

export default Join;
