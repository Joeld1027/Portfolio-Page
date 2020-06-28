import React from 'react';
import { Link } from 'react-router-dom';
import { HeroContainer } from './hero.styles';
import {
	Segment,
	Header,
	Button,
	Container,
} from 'semantic-ui-react';
import TypedComponent from '../typedcomponent/Typed.component';

const HeroSection = () => {
	return (
		<HeroContainer>
			<Container>
				<Segment basic>
					<Header className='hero-message' as='h1'>
						Hi I'm Joel, let me bring your <span>ideas</span> to{' '}
						<span>life</span>.
					</Header>
					<Header textAlign='center'>
						<TypedComponent />
						<div className='button-wrapper'>
							<Link to='/projects'>
								<Button
									floated='right'
									icon='fork'
									size='massive'
									inverted
									color='orange'
									content='Check My work'
								/>
							</Link>
						</div>
					</Header>
				</Segment>
			</Container>
		</HeroContainer>
	);
};

export default HeroSection;
