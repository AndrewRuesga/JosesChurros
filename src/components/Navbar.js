import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleClick, isLoggedIn }) => (
	<div>
		<h1>Joses Churros</h1>
		<nav>
			<div>
				{/* The navbar will show these links before you log in */}
				<Link to="/">Home</Link>
				<Link to="/map">Find Us</Link>
				<Link to="/hire">Hire Us</Link>
				<Link to="/contact">Contact Us</Link>
				<Link to="/signup">Join Us</Link>
				<Link to="/about">About Us</Link>
				<Link to="/login">Login</Link>
			</div>
		</nav>
		<hr />
	</div>
);

export default Navbar;
