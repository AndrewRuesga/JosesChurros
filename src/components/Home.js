import React from 'react';

/****COMPONENT IMPORTS****/
import Header from './Header';
import Map from './Map';
import Catering from './Catering';
import About from './About';
import Menu from './Menu';

export const Home = () => {
	return (
		<div id="home">
			<Header />
			{/* <Map /> */}
			<Menu />
			<About />
			<Catering />
		</div>
	);
};

export default Home;
