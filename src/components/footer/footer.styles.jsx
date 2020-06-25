import styled from 'styled-components';

export const FooterContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	left: 0;
	bottom: 0;
	.footer-section > h2.footer-name {
		font-family: 'Lobster', cursive;
	}
	.footer-section .footer-name span {
		color: #f2711c;
	}

	.footer-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2em 0em;
		h2 {
			margin: 0;
			font-family: 'Francois One', sans-serif;
			color: #fff;
		}
	}
	.footer-social {
		a {
			margin-left: 3em;
			@media (max-width: 600px) {
				margin-left: 1em;
			}
		}
	}
`;
