// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, registerWithEmailAndPassword } from '../firebase';

// function Register() {
// 	const [email, setEmail] = useState('');
// 	const [password, setPassword] = useState('');
// 	const [name, setName] = useState('');
// 	const [user, loading, error] = useAuthState(auth);
// 	const navigate = useNavigate();

// 	const register = () => {
// 		if (!name || !password || !email) alert('Please Fill Out All Fields');
// 		else registerWithEmailAndPassword(name, email, password);
// 	};

// 	useEffect(() => {
// 		if (loading) return;
// 		if (user) navigate('/');
// 	}, [user, loading]);

// 	return (
// 		<div className="register">
// 			<Link to="/">Back</Link>

// 			<h1 className="titleLogin">SIGN UP</h1>
// 			<div className="login">
// 				<label htmlFor="name">Name:</label>
// 				<input
// 					name="name"
// 					type="text"
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 				/>
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
// 				<button type="submit" onClick={register}>
// 					Sign Up
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
// export default Register;
