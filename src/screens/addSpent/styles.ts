import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

type ContainerProps = {
	$show: boolean;
};

export const Container = styled.div<ContainerProps>`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background-color: rgba(19, 41, 61, 0.8);
	opacity: ${({ $show }) => ($show ? 1 : 0)};
	pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
	transition: opacity 0.25s ease;
`;

export const Content = styled.div<ContainerProps>`
	z-index: 999;
	position: absolute;
	display: flex;
	flex-direction: column;
	bottom: 0;
	background-color: ${colors.default};
	border-radius: 20px 20px 0 0;
	width: 100vw;
	padding-bottom: 30px;
	transform: translateY(${({ $show }) => ($show ? '0' : '100%')});
	transition: transform 0.3s ease;
`;

export const Title = styled.text`
	font-weight: ${fontsWeight.black};
	font-size: 25px;
	padding: 20px;
`;

export const FormItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	padding-bottom: 35px;
`;

export const FormItemLabel = styled.text`
	font-weight: ${fontsWeight.semiBold};
	margin-bottom: 8px;
	font-size: 18px;
`;

export const FormItem = styled.input`
	height: 45px;
	border-radius: 30px;
	border: none;
	background-color: ${colors.paragraph};
	font-weight: ${fontsWeight.semiBold};
	margin-bottom: 8px;
	font-size: 15px;
	padding: 0 16px;
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: 10px;
`;
