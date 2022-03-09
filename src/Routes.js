import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import Map from './components/Map';
import Hire from './components/Hire';
import Contact from './components/Contact';
import About from './components/About';
import Join from './components/Join';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/map" component={Map} />
				<Route path="/hire" component={Hire} />
				<Route path="/contact" component={Contact} />
				<Route path="/about" component={About} />
				<Route path="/join" component={Join} />
			</Switch>
		</div>
	);
};

export default withRouter(Routes);
