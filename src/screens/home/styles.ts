import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${colors.default};
	padding: 105px 25px 0 25px;
	min-height: 100vh;
`;

export const Title = styled.h1`
	font-size: 25px;
	color: ${colors.title};
	margin-bottom: 24px;
	font-weight: ${fontsWeight.black};
	background-color: ${colors.default};
`;

export const Content = styled.div`
	flex: 1;
	overflow-y: auto;
	padding-bottom: 220px;
`;
