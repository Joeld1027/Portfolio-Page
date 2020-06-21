import React from 'react';
import { HeroContainer } from './hero.styles';
import {
	Segment,
	Header,
	Button,
	Container,
} from 'semantic-ui-react';

const HeroSection = () => {
	return (
		<HeroContainer>
			<Container>
				<Segment basic>
					<Header as='h1' style={{ fontSize: '4em' }}>
						Joel D. <span style={{ color: 'orange' }}>Infante</span>
					</Header>
					<Header textAlign='right'>
						<Header
							content='Let me build your dream ideas.'
							as='h2'
							color='yellow'
						/>
						<Button
							icon='fork'
							size='huge'
							color='linkedin'
							content='Check My Projects'
						/>
					</Header>
				</Segment>
			</Container>
		</HeroContainer>
	);
};

export default HeroSection;
