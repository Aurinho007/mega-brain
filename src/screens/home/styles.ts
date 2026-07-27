import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.default};
	padding: 105px 25px 0 25px;
`;

export const Title = styled.text`
	font-size: 30px;
	color: ${colors.title};
	margin-bottom: 24px;
	position: fixed;
	font-weight: ${fontsWeight.black};
`;

export const Content = styled.div`
	padding-top: 60px;
`;
