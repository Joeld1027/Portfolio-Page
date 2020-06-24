import React from 'react';
import {
	Item,
	Header,
	Segment,
	Divider,
	Container,
} from 'semantic-ui-react';

import ReactLogo from '../../images/techstack/React2.png';
import CSSLogo from '../../images/techstack/CSS.png';
import ExpressLogo from '../../images/techstack/Express.png';
import HTMLLogo from '../../images/techstack/html.png';
import JavascriptLogo from '../../images/techstack/Javascript2.png';
import MongoLogo from '../../images/techstack/Mongo.png';
import ReduxLogo from '../../images/techstack/Redux.png';
import NodeLogo from '../../images/techstack/node.jpg';

import creativej from '../../images/creativeJ.png';
import portfolio from '../../images/portfolio.png';
import lacontessaImage from '../../images/lacontessa.png';
import sunsetHill from '../../images/sunsetHill.png';
import SocialButtons from '../social-buttons/SocialButton.component';
import TechStack from '../techstack/TechStackImages.component';

const ProjectsSection = () => {
	return (
		<Container
			style={{ height: '100%' }}
			className='section-containers project-section'
		>
			<Header
				className='section-headers'
				color='orange'
				content='MY PROJECTS'
				as='h1'
			/>
			<Header
				color='orange'
				as='h3'
				content='List of projects I created.'
			/>
			<Divider inverted section />
			<Segment inverted padded>
				<Item.Group relaxed divided>
					<Item>
						<Item.Image size='large' src={creativej} />
						<Item.Content className='project-content'>
							<Header textAlign='right' as='h1'>
								Project Management App
							</Header>
							<Item.Description>
								<p>
									This is a full-stack web application. This web app
									comes complete with user authentication and
									authorization. Back-end support with node, express
									and mongodb to handle database and routes.
								</p>
								<p>
									For the Front-end I used React, Redux to manage the
									state. Semantic-ui, styled-components and custom CSS
									for the design. I used Chart.js to handle the
									display of data for the dashboard
								</p>
								<p>
									This app allows the user to create projects.
									Projects are composed from different tasks. Project
									managers can assign projects to developers,
									developers can access the task for the projects once
									they are assigned to such project.
								</p>
							</Item.Description>
							<Item.Description>
								<Header content='Tech-Stack' color='orange' />
								<TechStack
									logos={[
										ReactLogo,
										NodeLogo,
										ReduxLogo,
										ExpressLogo,
										MongoLogo,
										JavascriptLogo,
									]}
								/>
							</Item.Description>
							<Item.Description>
								<SocialButtons
									projectGit={
										'https://github.com/Joeld1027/issue-tracker-and-project-managmentm'
									}
									liveUrl={
										'https://creativej-management.herokuapp.com/'
									}
								/>
							</Item.Description>
						</Item.Content>
					</Item>
					<Item>
						<Item.Image size='large' src={sunsetHill} />
						<Item.Content>
							<Header as='h1'>Sunset Hill filter</Header>
							<Item.Description>
								<p>
									This is a React front-end app. This site is part of
									a code challenge. This site will display array of
									buildings that if in line can see the sunset.
								</p>
								<p>
									For this app I used React, some custom css and
									ChartJs for displaying the Chart data.
								</p>
							</Item.Description>
							<Item.Description>
								<Header content='Tech-Stack' color='orange' />
								<TechStack
									logos={[ReactLogo, JavascriptLogo, CSSLogo]}
								/>
							</Item.Description>
							<Item.Description>
								<SocialButtons
									projectGit={
										'https://github.com/Joeld1027/Sunset-Hills-CF-challenge'
									}
									liveUrl={
										'https://sunset-hill-challenge.herokuapp.com/'
									}
								/>
							</Item.Description>
						</Item.Content>
					</Item>

					<Item>
						<Item.Image size='large' src={portfolio} />
						<Item.Content>
							<Header as='h1'>Portfolio Page</Header>
							<Item.Description>
								<p>
									This is how I build this portfolio page. Check the
									git hub for the code. I used react, semantic ui and
									lot of custom css with styled components.
								</p>
							</Item.Description>
							<Item.Description>
								<Header content='Tech-Stack' color='orange' />
								<TechStack
									logos={[
										ReactLogo,
										HTMLLogo,
										CSSLogo,
										JavascriptLogo,
									]}
								/>
							</Item.Description>
							<Item.Description>
								<SocialButtons
									projectGit={
										'https://github.com/Joeld1027/Portfolio-Pagen'
									}
								/>
							</Item.Description>
						</Item.Content>
					</Item>

					<Item>
						<Item.Image size='large' src={lacontessaImage} />
						<Item.Content>
							<Header as='h1'>La Contessa Hair Salon</Header>
							<Item.Description>
								<p>
									I Build this Website to help a local business in the
									heart of Austin that has been affected by the
									current events. I noticed they didn't had a
									website,I prensented them with a layout and they
									were in love with it.
								</p>
								<p>
									For this website the owner was happy with a simple
									html and css page.
								</p>
							</Item.Description>
							<Item.Description>
								<Header content='Tech-Stack' color='orange' />
								<TechStack logos={[HTMLLogo, CSSLogo]} />
							</Item.Description>
							<Item.Description>
								<SocialButtons
									projectGit={
										'https://github.com/Joeld1027/Lacontessa-Hair-Salon'
									}
									liveUrl={'https://lacontessav2.herokuapp.com/'}
								/>
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
		</Container>
	);
};

export default ProjectsSection;
