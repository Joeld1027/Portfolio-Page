import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { FooterContainer } from './footer.styles';

const Footer = () => {
	return (
		<FooterContainer>
			<Container className='footer-section'>
				<h2 className='footer-name'>
					Joel D. <span>Infante</span>
				</h2>
				<div className='footer-social'>
					<Button
						inverted
						circular
						href='https://github.com/Joeld1027'
						icon='github'
						color='black'
					/>
					<Button
						inverted
						circular
						href='https://www.linkedin.com/in/joel-infante-10953a93/'
						icon='linkedin'
						color='black'
					/>
				</div>
			</Container>
		</FooterContainer>
	);
};

export default Footer;
