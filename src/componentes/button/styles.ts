import styled from 'styled-components';
import { fontsWeight, colors } from '../../constants';

export const PrimaryButton = styled.button`
	background-color: ${colors.primary};
	border-radius: 15px;
	height: 55px;
	width: 92%;
	font-size: 22px;
	font-weight: ${fontsWeight.black};
	color: ${colors.title};
`;
