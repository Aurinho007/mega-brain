import styled from 'styled-components';
import { colors, fontsWeight } from '../../constants';

export const Container = styled.div`
	background-color: ${colors.secondary};
	border-radius: 10px;
	padding: 12px;
	padding-bottom: 24px;
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

export const Menu = styled.text`
	color: ${colors.label};
	font-weight: ${fontsWeight.black};
	font-size: 30px;
	transform: rotate(270deg);
	margin-top: -5px;
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
