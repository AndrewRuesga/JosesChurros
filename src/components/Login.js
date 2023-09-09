// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth, logInWithEmailAndPassword } from '../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const Login = () => {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [user, loading, error] = useAuthState(auth);
// 	const navigate = useNavigate();
// 	useEffect(() => {
// 		if (loading) {
// 			// maybe trigger a loading screen
// 			return;
// 		}
// 		if (user) navigate('/');
// 	}, [user, loading]);

// 	return (
// 		<div className="login">
// 			<Link to="/">Back</Link>
// 			<h1>SIGN IN</h1>
// 			<div className="login">
// 				<label htmlFor="email">Email:</label>
// 				<input
// 					name="email"
// 					type="text"
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 				/>
// 				<label htmlFor="password">Password:</label>
// 				<input
// 					name="password"
// 					type="password"
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 				/>
// 				{/* <Link to="/reset">Forgot Password</Link> */}
// 				<button
// 					type="submit"
// 					onClick={() => logInWithEmailAndPassword(email, password)}
// 				>
// 					Sign In
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
