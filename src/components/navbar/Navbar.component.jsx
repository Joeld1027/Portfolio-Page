import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarContainer } from './navbar.styles';
import { Container } from 'semantic-ui-react';

const Navbar = () => {
	return (
		<Container>
			<NavbarContainer>
				<ul>
					<li>
						<NavLink exact to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/about'>About me</NavLink>
					</li>
					<li>
						<NavLink to='/projects'>Projects</NavLink>
					</li>
					<li>
						<NavLink to='/skills'>Skills</NavLink>
					</li>
					<li>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul>
			</NavbarContainer>
		</Container>
	);
};

export default Navbar;
