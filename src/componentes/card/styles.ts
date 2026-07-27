import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

export const Container = styled.div`
	background-color: ${colors.secondary};
	border-radius: 10px;
	padding: 12px;
	padding-bottom: 24px;
	margin-bottom: 20px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 18px;
`;

export const Title = styled.text`
	font-size: 22px;
	color: ${colors.label};
	font-weight: ${fontsWeight.semiBold};
	padding-top: 6px;
`;

export const Menu = styled.button`
	color: ${colors.label};
	font-weight: ${fontsWeight.black};
	font-size: 30px;
	transform: rotate(270deg);
	margin-top: -5px;
	background: transparent;
	border: none;
	cursor: pointer;
`;

export const ActionMenu = styled.div`
	position: absolute;
	right: 0;
	top: 36px;
	background-color: ${colors.default};
	border-radius: 8px;
	padding: 8px 0;
	min-width: 100px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	z-index: 10;
`;

export const ActionOption = styled.button`
	width: 100%;
	text-align: left;
	padding: 8px 12px;
	background: transparent;
	border: none;
	color: ${colors.secondary};
	font-weight: ${fontsWeight.medium};
	cursor: pointer;

	&:hover {
		background-color: ${colors.paragraph};
	}
`;

export const Line = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ValueContinerLeft = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const ValueContinerRight = styled.div`
	display: flex;
	flex-direction: column;
	text-align: right;
`;

export const Value = styled.text`
	color: ${colors.label};
	font-weight: ${fontsWeight.medium};
	font-size: 18px;
	margin-bottom: 4px;
`;

export const Label = styled.text`
	color: ${colors.paragraph};
	font-weight: ${fontsWeight.extraLight};
	font-size: 14px;
`;

export const Bar = styled.div`
	position: relative;
	background-color: ${colors.default};
	width: 100%;
	height: 15px;
	border-radius: 50px;
	margin-top: 12px;
	margin-bottom: 4px;
`;

export const FillBar = styled.div<{ conclusionPercent: number }>`
	position: absolute;
	background-color: ${colors.primary};
	width: ${(props) => props.conclusionPercent}%;
	height: 15px;
	border-radius: 50px;
`;

export const Legend = styled.text`
	color: ${colors.paragraph};
	font-weight: ${fontsWeight.extraLight};
	font-size: 12px;
	padding-left: 2px;
`;
