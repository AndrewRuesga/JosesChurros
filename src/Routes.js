import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

// Components
import Home from './components/Home';
import Map from './components/Map';

const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/map" component={Map} />
			</Switch>
		</div>
	);
};

export default withRouter(Routes);
