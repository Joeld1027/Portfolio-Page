import React from 'react';
import {
	Container,
	Header,
	Divider,
	Button,
} from 'semantic-ui-react';
import { FormContainer } from './Contact.styles';

const Contact = () => {
	return (
		<Container
			style={{ marginBottom: '8em' }}
			text
			className='section-containers'
		>
			<Header
				className='section-headers'
				color='orange'
				content='Contact me'
				as='h1'
			/>
			<Header
				as='h3'
				content={
					<p style={{ fontSize: '1.3em' }}>
						Email me Joel@joeldinfante.com
					</p>
				}
			/>
			<Divider
				style={{
					fontSize: '1.4em',
					color: '#f2711c',
					padding: '0.5em 0em',
				}}
				horizontal
			>
				Or
			</Divider>
			<FormContainer>
				<form name='contact' method='POST' data-netlify='true'>
					<label>Enter your email</label>
					<input type='email' name='email' />

					<label>Message</label>
					<textarea rows='8' name='message' />

					<Button color='orange' inverted type='submit'>
						Send
					</Button>
				</form>
			</FormContainer>
		</Container>
	);
};

export default Contact;
