import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.component';
import HeroSection from './components/hero/Hero.component';
import SkillsSection from './components/skills-section/SkillsSection.component';
import ProjectsSection from './components/projects-section/ProjectsSection.component';
import Footer from './components/footer/Footer.component';
import About from './components/about-me/About.component';
import Contact from './components/contact-me/Contact.component';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<HeroSection />
				</Route>
				<Route exact path='/skills'>
					<SkillsSection />
				</Route>
				<Route exact path='/projects'>
					<ProjectsSection />
				</Route>
				<Route exact path='/about'>
					<About />
				</Route>
				<Route exact path='/contact'>
					<Contact />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
