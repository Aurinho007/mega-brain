import styled from 'styled-components';
import { fontsWeight } from '../../constants';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Image = styled.img`
	height: 180px;
	margin-top: 100px;
`;

export const Label = styled.text`
	margin-top: 40px;
	font-weight: ${fontsWeight.semiBold};
	font-size: 25px;
	text-align: center;
`;
