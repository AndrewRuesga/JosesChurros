import Navbar from './components/Navbar';
import Routes from './Routes';
import Home from './components/Home';
import Map from './components/Map';
import Hire from './components/Hire';
import Contact from './components/Contact';
import About from './components/About';
import Join from './components/Join';

import './css/App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Map />
			<Hire />
			<Contact />
			{/* <Join /> */}
			<About />
			{/* <Routes /> */}
		</div>
	);
}

export default App;
