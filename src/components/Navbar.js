import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../images/joseschurros.png';

const Navbar = () => (
	<header>
		<Link
			activeClass="active"
			to="home"
			spy={true}
			smooth={true}
			offset={-70}
			duration={500}
		>
			<img className="logo" alt="logo" src={logo} />
		</Link>
		<nav>
			<Link
				activeClass="active"
				to="map"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Find
			</Link>
			<Link
				activeClass="active"
				to="hire"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Hire
			</Link>
			<Link
				activeClass="active"
				to="contact"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Contact
			</Link>
			{/* <Link
				activeClass="active"
				to="join"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Join
			</Link> */}
			<Link
				activeClass="active"
				to="about"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				About
			</Link>
			<Link
				activeClass="active"
				to="login"
				spy={true}
				smooth={true}
				offset={-70}
				duration={500}
			>
				Login
			</Link>
		</nav>
	</header>
);

export default Navbar;
