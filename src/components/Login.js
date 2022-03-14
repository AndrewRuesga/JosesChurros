import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div id="login">
			<Link to="/">Back</Link>
			<div>
				<h1>SIGN IN</h1>
				<form>
					<label htmlFor="email">Email:</label>
					<input name="email" type="text" />
					<label htmlFor="password">Password:</label>
					<input name="password" type="password" />
					<label htmlFor="forgot">Forgot Password?</label>
					<button type="submit">Sign In</button>
				</form>
			</div>
			<div>
				<h1 className="titleLogin">SIGN UP</h1>
				<form>
					<label htmlFor="firstName">First Name:</label>
					<input name="firstName" type="text" />
					<label htmlFor="lastName">Last Name:</label>
					<input name="lastName" type="text" />
					<label> Phone Number:</label>
					<input name="phone" type="text" />
					<label htmlFor="email">Email:</label>
					<input name="email" type="text" />
					<label htmlFor="password">Password:</label>
					<input name="password" type="password" />
					<label htmlFor="password">Verify Password:</label>
					<input name="verifyPassword" type="password" />
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
