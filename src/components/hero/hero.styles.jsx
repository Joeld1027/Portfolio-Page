import styled from 'styled-components';

export const HeroContainer = styled.section`
	margin: 10em 0em;
	height: 100%;
	.type-wrap {
		box-sizing: content-box;
		margin: 4em 0em 10em 0em !important;
	}
	h1.hero-message {
		font-size: 4em;
		@media (max-width: 600px) {
			font-size: 2.9em;
		}
	}
	span {
		color: #f2711c;
	}
	span.type-element {
		font-size: 1.8em;
		color: #f2711c;
		filter: contrast(60%);
		@media (max-width: 600px) {
			font-size: 1.4em;
		}
	}
	span.after-span {
		animation: fadeIn ease-in 2s;

		@keyframes fadeIn {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 100%;
			}
		}
	}
	span.animated-span {
		opacity: 0;
		font-size: 2em;
		filter: contrast(100%) !important;
		font-weight: bold !important;
		color: #fff !important;
		@media (max-width: 600px) {
			font-size: 1.6em;
		}
	}
`;
