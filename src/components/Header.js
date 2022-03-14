import React from 'react';
import logo from '../images/joseschurros.png';

export const Header = () => {
	return (
		<div id="header">
			<div className="title">
				<h1 className="titleHead">CATERING AVAILABLE</h1>
				<h1>
					TRADITIONAL <span className="blue">AND</span>
				</h1>
				<h1 className="blue">
					GOURMET <span className="black">CHURROS</span>
				</h1>
			</div>
			<img alt="" src={logo} />
		</div>
	);
};

export default Header;
