import styled from 'styled-components';
import { contentMaxWidth } from '../../theme/theme';

export const Container = styled.header`
	position: sticky;
	top: 0;
	z-index: 90;
	background-color: ${({ theme }) => theme.colors.surface};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing.md};
	max-width: ${contentMaxWidth};
	margin: 0 auto;
	padding: 14px ${({ theme }) => theme.spacing.lg};
`;

export const BrandGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	min-width: 0;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	min-width: 0;
`;

export const Title = styled.p`
	font-size: 18px;
	line-height: 1.2;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const SubTitle = styled.p`
	font-size: 13px;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-weight: ${({ theme }) => theme.fontsWeight.regular};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	flex-shrink: 0;
`;
