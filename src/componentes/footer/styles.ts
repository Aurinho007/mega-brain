import styled from 'styled-components';
import { colors } from '../../constants';

export const Container = styled.div`
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	justify-content: center;
	height: 100px;
	box-shadow: 0 -8px 20px rgba(0, 0, 0, 0.12);
	padding-top: 20px;
	background-color: ${colors.default};
`;
