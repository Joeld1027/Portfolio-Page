import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer } from './navbar.styles';
import { Container } from 'semantic-ui-react';

const Navbar = () => {
	return (
		<Container>
			<NavbarContainer>
				<h1 className='name-logo'>
					Joel D. <span>Infante</span>
				</h1>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About me</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/skills'>Skills</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</NavbarContainer>
		</Container>
	);
};

export default Navbar;
