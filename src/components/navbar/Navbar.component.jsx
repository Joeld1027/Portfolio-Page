import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {
	NavbarContainer,
	SideBarContainer,
	SideBar,
	ButtonContainer,
} from './navbar.styles';
import { Container, Button } from 'semantic-ui-react';

const Navbar = () => {
	const [sidebarToggle, setSidebarToggle] = useState(false);
	const { pathname } = useLocation();
	useEffect(() => {
		setSidebarToggle(false);
	}, [pathname]);
	return (
		<Container>
			{!sidebarToggle && (
				<ButtonContainer>
					<Button
						floated='left'
						onClick={() => setSidebarToggle(true)}
						icon='sidebar'
						inverted
					/>
				</ButtonContainer>
			)}
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
			<SideBar className={sidebarToggle ? 'show-sidebar' : ''}>
				<Button
					onClick={() => setSidebarToggle(false)}
					floated='right'
					size='large'
					icon='close'
					inverted
				/>
				<SideBarContainer>
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
				</SideBarContainer>
			</SideBar>
		</Container>
	);
};

export default Navbar;
