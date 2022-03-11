import React from 'react';
import banner from '../images/banner.png';

export const Home = () => {
	return (
		<div id="home">
			<img className="banner" alt="logo" src={banner} />
		</div>
	);
};

export default Home;
