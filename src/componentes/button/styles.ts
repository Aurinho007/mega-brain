import styled from 'styled-components';
import { fontsWeight, colors } from '../../constants';

export const PrimaryButton = styled.button`
	background-color: ${colors.primary};
	border-radius: 30px;
	height: 50px;
	width: 92%;
	font-size: 20px;
	font-weight: ${fontsWeight.black};
	color: ${colors.label};
`;

export const SecondaryButton = styled.button`
	background-color: ${colors.default};
	border: solid 3px ${colors.primary};
	border-radius: 30px;
	height: 47px;
	width: 92%;
	font-size: 20px;
	font-weight: ${fontsWeight.black};
	color: ${colors.title};
`;
