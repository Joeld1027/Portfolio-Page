import styled from 'styled-components';

export const HeroContainer = styled.section`
	margin: 10em 0em;
	height: 100%;
	.type-wrap {
		box-sizing: content-box;
		margin: 4em 0em 10em 0em !important;
	}

	span {
		color: #f2711c;
		padding: 0.3em;
	}
	span.type-element {
		font-size: 1.9em;
		color: #f2711c;
		filter: contrast(60%);
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
	}
`;
