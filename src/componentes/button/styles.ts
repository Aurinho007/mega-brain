import styled from 'styled-components';
import { fontsWeight, colors } from '../../constants';

export const PrimaryButton = styled.button`
	background-color: ${colors.primary};
	border-radius: 30px;
	height: 45px;
	width: 92%;
	font-size: 20px;
	font-weight: ${fontsWeight.black};
	color: ${colors.label};
`;

export const SecondaryButton = styled.button`
	background-color: ${colors.default};
	border: solid 3px ${colors.primary};
	border-radius: 30px;
	height: 42px;
	width: 92%;
	font-size: 20px;
	font-weight: ${fontsWeight.black};
	color: ${colors.title};
`;
