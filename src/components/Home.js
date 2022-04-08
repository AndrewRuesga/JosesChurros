import React from 'react';

/****COMPONENT IMPORTS****/
import Header from './Header';
import Map from './Map';
import Catering from './Catering';
import About from './About';

export const Home = () => {
	return (
		<div id="home">
			<Header />
			<Map />
			<About />
			<Catering />
		</div>
	);
};

export default Home;
