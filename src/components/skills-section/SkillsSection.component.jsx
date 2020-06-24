import React from 'react';
import {
	Segment,
	Card,
	Header,
	Divider,
	Container,
} from 'semantic-ui-react';
import nodeImage from '../../images/skillsImages/node.png';
import ReactImage from '../../images/skillsImages/ReactImage.jpg';
import MongoImage from '../../images/skillsImages/mongo.png';
import ExpressImage from '../../images/skillsImages/express.jpeg';
import ReduxImage from '../../images/skillsImages/redux.png';
import ApiImage from '../../images/skillsImages/rest.png';
import BootstrapImage from '../../images/skillsImages/bootstrap.png';
import FrontendImage from '../../images/skillsImages/frontend.jpg';

const SkillsSection = () => {
	return (
		<Container className='section-containers'>
			<Header
				className='section-headers'
				as='h1'
				content='Tech-stack'
				color='orange'
			/>
			<Header
				as='h3'
				content='Some of the technologies I use.'
				color='orange'
			/>
			<Divider section inverted />
			<Segment padded basic textAlign='center'>
				<Card.Group itemsPerRow={4} className='skill-cards'>
					<Card raised image={ReactImage} header='React JS' />
					<Card raised image={nodeImage} header='Node JS' />
					<Card raised image={MongoImage} header='MongoDB' />
					<Card raised image={ExpressImage} header='Express JS' />
					<Card raised image={ReduxImage} header='Redux JS' />
					<Card raised image={ApiImage} header='REST API' />
					<Card raised image={BootstrapImage} header='Bootstrap' />
					<Card
						raised
						image={FrontendImage}
						header='Web-Development'
					/>
				</Card.Group>
			</Segment>
		</Container>
	);
};

export default SkillsSection;
