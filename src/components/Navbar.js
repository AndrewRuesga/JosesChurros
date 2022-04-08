import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { auth } from '../firebase';
import { logout } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	const logoutFnc = () => {
		logout();
		navigate('/');
	};
	return (
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
			{user ? (
				<button onClick={logoutFnc}>Our Logout</button>
			) : (
				<Link to="/login">Our Login</Link>
			)}
		</nav>
	);
};

export default Navbar;
