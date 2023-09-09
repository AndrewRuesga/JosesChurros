import React from 'react';

/****COMPONENT IMPORTS****/
import Header from './Header';
import Map from './Map';
import Catering from './Catering';
import About from './About';
import Menu from './Menu';
import Menu2 from './Menu2';

export const Home = () => {
	return (
		<div id="home">
			<Header />
			{/* <Map /> */}
			<Menu2 />
			<About />
			<Catering />
		</div>
	);
};

export default Home;
