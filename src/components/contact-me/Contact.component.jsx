import React from 'react';
import {
	Container,
	Form,
	Button,
	Header,
	Divider,
} from 'semantic-ui-react';

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
			<Form
				method='POST'
				name='contact'
				size='large'
				inverted
				data-netlify='true'
			>
				<Form.Input name='email' label='Enter your email' />
				<Form.TextArea name='message' rows={8} label='Message' />
				<Button type='submit' floated='right' color='orange'>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Contact;
