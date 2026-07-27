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
	box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
	padding-top: 15px;
	padding-bottom: 30px;
	background-color: ${colors.default};
`;

export const ButtonGroup = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;
