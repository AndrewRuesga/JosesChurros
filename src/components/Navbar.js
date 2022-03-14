import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

const Navbar = () => (
	<nav id="navbar">
		<Scroll
			activeClass="active"
			to="map"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
		>
			Our Carts
		</Scroll>
		<Scroll
			activeClass="active"
			to="about"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
		>
			Our Churros
		</Scroll>
		<Scroll
			activeClass="active"
			to="catering"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
		>
			Our Catering
		</Scroll>
		<Link to="/login">Our Login</Link>
		{/* <Link to="/">Our Logout</Link> */}
	</nav>
);

export default Navbar;
