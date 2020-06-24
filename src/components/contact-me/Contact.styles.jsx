import styled from 'styled-components';

export const FormContainer = styled.div`
	form {
		font-size: 1.1em;
		color: #fff;
		display: flex;
		flex-direction: column;
		button {
			display: block !important;
			width: 20%;
		}
		input {
			margin-bottom: 1em;
			padding: 0.4em;
			border-radius: 5px;
		}
		textarea {
			border-radius: 5px;
			margin-bottom: 1em;
		}
	}
`;
