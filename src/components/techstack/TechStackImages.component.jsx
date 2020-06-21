import React from 'react';
import { Image } from 'semantic-ui-react';

const TechStack = ({ logos }) => {
	return (
		<div>
			<Image.Group size='tiny'>
				{logos.map((logo) => (
					<Image key={logo.toString()} src={logo} />
				))}
			</Image.Group>
		</div>
	);
};

export default TechStack;
