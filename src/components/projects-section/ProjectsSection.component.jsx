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
import HTMLLogo from '../../images/techstack/HTML.jpg';
import JavascriptLogo from '../../images/techstack/Javascript2.png';
import MongoLogo from '../../images/techstack/Mongo.png';
import ReduxLogo from '../../images/techstack/Redux.png';
import NodeLogo from '../../images/techstack/node.jpg';
import SassLogo from '../../images/techstack/Sass.png';

import creativej from '../../images/creativeJ.png';
import lacontessaImage from '../../images/lacontessa.png';
import sunsetHill from '../../images/sunsetHill.png';
import SocialButtons from '../social-buttons/SocialButton.component';
import TechStack from '../techstack/TechStackImages.component';

const ProjectsSection = () => {
	return (
		<Container className='section-containers project-section'>
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
								CreativeJ Project Management App
							</Header>
							<Item.Description>
								<p>
									This is a full-stack web application. This web app
									allows the user to assign roles and projects to team
									members.
								</p>
								<p>
									Projects are composed from different tasks. I
									decided to create this project using React for the
									front-end. Combined React with Redux to manage the
									state. Used semantic-ui library of components.
									Node.js and Express.js on the back-end to handle the
									server combined with MongoDB for data.
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
										SassLogo,
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
				</Item.Group>
			</Segment>
		</Container>
	);
};

export default ProjectsSection;
