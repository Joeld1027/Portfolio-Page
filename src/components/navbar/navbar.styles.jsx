import styled from 'styled-components';

export const NavbarContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	margin: 1.7em 0em !important;
	span {
		color: #f2711c;
	}
	ul {
		display: flex;
		list-style: none;
		li {
			padding: 0 2em;
			font-size: 1.3em;
			a {
				text-decoration: none;
				color: white;
			}
		}
	}
`;
