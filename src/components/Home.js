import React from 'react';

/****COMPONENT IMPORTS****/
import Header from './Header';
import Map from './Map';
import Catering from './Catering';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

export const Home = () => {
	return (
		<div id="home">
			<Header />
			<Map />
			<About />
			<Catering />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
