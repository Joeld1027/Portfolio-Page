import React from 'react';
import { Button } from 'semantic-ui-react';

const SocialButtons = ({ projectGit, liveUrl }) => {
	return (
		<div>
			<Button
				inverted
				href='https://www.linkedin.com/in/joel-infante-10953a93/'
				size='big'
				icon='linkedin'
				circular
				color='black'
			/>
			<Button
				inverted
				href={projectGit}
				content='<code>'
				size='big'
				icon='github alternate'
				circular
				color='black'
			/>
			<Button
				inverted
				href={liveUrl}
				content='Live-Demo'
				size='big'
				icon='fork'
				circular
				color='orange'
			/>
		</div>
	);
};

export default SocialButtons;
