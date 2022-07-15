import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Indroduction';
import Education from './components/Education';
import Publication from './components/Publication';
import Works from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export const MyName = createContext("Dehong");

// https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-home.html
function App() {
	const [name, setName] = useState<string>("hau chu");

	return (
		<div className="App">
			<MyName.Provider value={name}>
			<Navbar />
			<Intro />
			<Education />
			<Works />
			<Publication />
			<Skills />
			<Projects />
			<Footer />
			</MyName.Provider>
		</div>
	);
}

export default App;
