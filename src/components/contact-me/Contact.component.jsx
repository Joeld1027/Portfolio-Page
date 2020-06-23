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
						Email me at Joel@joeldinfante.com
					</p>
				}
			/>
			<Divider
				style={{ fontSize: '1.4em', color: '#f2711c' }}
				horizontal
			>
				Or
			</Divider>
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
