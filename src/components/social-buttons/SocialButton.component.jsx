import React from 'react';
import { Button } from 'semantic-ui-react';

const SocialButtons = ({ projectGit, liveUrl }) => {
	return (
		<div>
			<Button
				inverted
				href={projectGit}
				content='<code>'
				size='big'
				icon='github alternate'
				circular
				color='black'
			/>
			{liveUrl && (
				<Button
					inverted
					href={liveUrl}
					content='Live-Demo'
					size='big'
					icon='fork'
					circular
					color='orange'
				/>
			)}
		</div>
	);
};

export default SocialButtons;
