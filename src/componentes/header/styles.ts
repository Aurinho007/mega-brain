import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

export const Container = styled.div`
	background-color: ${colors.primary};
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	width: 100%;
	height: 105px;

	&::after {
		content: '';

		position: absolute;
		bottom: -1px;
		left: 0;

		width: 100%;
		height: 20px;

		background-color: ${colors.default};

		border-top-left-radius: 50px;
		border-top-right-radius: 50px;
	}
`;

export const Content = styled.div`
	display: flex;
	padding: 12px 25px;
`;

export const LogoContainer = styled.div`
	display: flex;
	background-color: ${colors.default};
	border-radius: 100px;
	width: 50px;
	height: 50px;
	align-items: center;
	justify-content: center;
	border: solid 2px ${colors.secondary};
`;

export const Logo = styled.img`
	width: 40px;
	height: 40px;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	padding-left: 15px;
	padding-top: 6px;
`;

export const Title = styled.text`
	font-size: 23px;
	font-weight: ${fontsWeight.black};
`;

export const SubTitle = styled.text`
	font-size: 18px;
	font-weight: ${fontsWeight.light};
`;
