import React from 'react';

const Contact = () => {
	return (
		<div>
			<h2>Contact Us</h2>
			<p>
				Got a question? We'd love to hear from you. Send us a message and we'll
				respond as soon as possible.
			</p>
			<form>
				<label> Name: </label>
				<input name="name" type="text" />
				<label> Email: </label>
				<input name="email" type="text" />
				<label> Phone Number: </label>
				<input name="phone" type="text" />
				<label> Message: </label>
				<input name="message" type="text" />
				<button>Send Message</button>
			</form>
		</div>
	);
};

export default Contact;
