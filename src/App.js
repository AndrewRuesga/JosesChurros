import React from 'react';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Dashboard from './components/Dashboard';

import './css/Home.css';
import './css/Header.css';
import './css/Map.css';
import './css/About.css';
import './css/Catering.css';
import './css/Contact.css';
import './css/Footer.css';
import './css/Login.css';
import './css/MediaQuery.css';
import './css/Menu.css';

function App() {
	return (
		<div id="app">
			<Router>
				<Routes>
					<Route path="/" exact element={<Home />} />
					{/* <Route path="/login" element={<Login />} /> */}
					{/* <Route path="/register" element={<Register />} /> */}
					{/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
				</Routes>
				<Contact />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
