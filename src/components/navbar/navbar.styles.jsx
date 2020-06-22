import styled from 'styled-components';

export const NavbarContainer = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	margin: 1.7em 0em !important;

	ul {
		display: flex;
		list-style: none;
		li {
			padding: 0 2em;
			font-size: 1.3em;
			a {
				&:hover {
					color: #f2711c;
				}
				text-decoration: none;
				color: white;
			}
			a.active {
				color: #f2711c;
				border-bottom: 3px solid #f2711c;
			}
		}
	}
`;
