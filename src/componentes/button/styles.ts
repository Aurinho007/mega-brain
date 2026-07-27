import styled from 'styled-components';
import { fonts, colors } from '../../constants';

export const PrimaryButton = styled.button`
	background-color: ${colors.primary};
	border-radius: 15px;
	height: 55px;
	width: 92%;
	font-size: 22px;
	color: ${colors.title};
	font-family: ${fonts.primary};
	font-weight: 800;
`;
