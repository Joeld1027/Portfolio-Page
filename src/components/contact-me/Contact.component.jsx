import React from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';

const Contact = () => {
	return (
		<Container
			style={{ marginBottom: '14em' }}
			text
			className='section-containers'
		>
			<Header
				className='section-headers'
				color='orange'
				content='Contact me'
				as='h1'
			/>
			<Form size='large' inverted>
				<Form.Input label='Name' />
				<Form.Input label='Email' />
				<Form.TextArea rows={8} label='Message' />
				<Button floated='right' color='orange'>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Contact;
