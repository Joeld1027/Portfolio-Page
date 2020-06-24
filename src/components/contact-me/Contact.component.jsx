import React, { useState } from 'react';
import {
	Container,
	Header,
	Divider,
	Button,
	Form,
} from 'semantic-ui-react';
import { FormContainer } from './Contact.styles';

const Contact = () => {
	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					'=' +
					encodeURIComponent(data[key])
			)
			.join('&');
	};
	const [formData, setFormData] = useState({
		email: '',
		message: '',
	});
	const handleSubmit = (e) => {
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: encode({ 'form-name': 'contact', ...formData }),
		})
			.then(() => alert('Success!'))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

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
			<Form onSubmit={handleSubmit} size='large' inverted>
				<Form.Input
					onChange={handleChange}
					name='email'
					value={formData.email}
					label='Enter your email'
				/>
				<Form.TextArea
					onChange={handleChange}
					value={formData.message}
					name='message'
					rows={8}
					label='Message'
				/>
				<Button type='submit' floated='right' color='orange'>
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default Contact;
