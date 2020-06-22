import React from 'react';
import {
	Container,
	Item,
	Image,
	Header,
	Divider,
} from 'semantic-ui-react';
import avatarImg from '../../images/profileImage.jpg';

const About = () => {
	return (
		<Container className='section-containers'>
			<Header
				className='section-headers'
				color='orange'
				content='About Me'
				as='h1'
			/>
			<Header
				color='orange'
				as='h3'
				content='Get to know me a bit more.'
			/>
			<Divider inverted section />
			<Item.Group>
				<Item>
					<Image size='medium' src={avatarImg} />

					<Item.Content verticalAlign='top'>
						<Header as='h1'>
							Hi, I'm Joel Daniel Infante, I'm a full-stack web
							developer from the US.
						</Header>
						<Item.Description>
							<p>
								I made this section so I can tell you a bit about
								myself. I'm a self-taught developer. I live in Austin
								TX. One of my favorite hobbies is learning software
								development, I love challenging myself to learn new
								technologies.
							</p>
							<p>
								I've been creating sites for almost one year. Since I
								started, software development has become my passion.
								The most exciting part is to solve real life problems
								with code.
							</p>
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
		</Container>
	);
};

export default About;
