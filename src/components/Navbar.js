import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div>
		<h1>Joses Churros</h1>
		<nav>
			<div>
				<Link to="/">Home</Link>
				<Link to="/map">Find Us</Link>
				<Link to="/hire">Hire Us</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/join">Join Us</Link>
				<Link to="/about">About Us</Link>
				<Link to="/login">Login</Link>
			</div>
		</nav>
		<hr />
	</div>
);

export default Navbar;
