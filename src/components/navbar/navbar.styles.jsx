import styled from 'styled-components';

export const NavbarContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	margin: 1.7em 0em !important;

	ul {
		@media (max-width: 700px) {
			display: none;
		}
		display: flex;
		list-style: none;
		li {
			padding: 0 2em;
			font-size: 1.3em;
			@media (max-width: 900px) {
				padding: 0 1.3em;
			}
			a {
				&:hover {
					color: #f2711c;
				}
				text-decoration: none;
				color: white;
			}
			a.active {
				padding: 0.5em 0;
				color: #f2711c;
				border-bottom: 3px solid #f2711c;
			}
		}
	}
`;

export const SideBar = styled.div`
	animation: all ease-in-out 1s;
	transform: translateX(-100%);
	background: rgba(0, 0, 0, 0.8);
	z-index: 10;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	width: 44%;
	&.show-sidebar {
		transform: translateX(0);
		animation: slidein ease-in-out 0.7s;
		@keyframes slidein {
			0% {
				transform: translateX(-100%);
			}
			100% {
				transform: translateX(0);
			}
		}
	}
`;

export const SideBarContainer = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	ul {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	li {
		list-style: none;
		a.active {
			color: #f2711c;
			border-bottom: 3px solid #f2711c;
		}

		a {
			padding: 0.5em 0;
			font-size: 1.7em;
			color: #fff;
		}
	}
`;
export const ButtonContainer = styled.div`
	display: none;
	@media (max-width: 700px) {
		display: block;
	}
`;
