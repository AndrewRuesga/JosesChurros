import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const Routes = () => {
	return (
		<div id="routes">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/login" component={Login} />
			</Switch>
		</div>
	);
};

export default withRouter(Routes);
