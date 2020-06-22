import React from 'react';
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
					<Header as='h1' style={{ fontSize: '4em' }}>
						Hi I'm Joel, let me bring your <span>ideas</span> to{' '}
						<span>life</span>.
					</Header>
					<Header textAlign='center'>
						<TypedComponent />
						<div className='button-wrapper'>
							<Button
								floated='right'
								icon='fork'
								size='massive'
								inverted
								color='orange'
								content='Check My Projects'
							/>
						</div>
					</Header>
				</Segment>
			</Container>
		</HeroContainer>
	);
};

export default HeroSection;
