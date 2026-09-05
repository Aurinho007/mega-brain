import styled from 'styled-components';
import { breakpoints, contentMaxWidth } from '../../theme/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.background};
	min-height: 100vh;
`;

export const Content = styled.main`
	flex: 1;
	width: 100%;
	max-width: ${contentMaxWidth};
	margin: 0 auto;
	padding: ${({ theme }) => theme.spacing.lg};
	padding-bottom: 140px;

	@media (min-width: ${breakpoints.tablet}) {
		padding: ${({ theme }) => theme.spacing.xl};
		padding-bottom: ${({ theme }) => theme.spacing.xxl};
	}
`;

export const PageHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing.md};
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
	font-size: 22px;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
`;

export const Toolbar = styled.div`
	display: none;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;

	@media (min-width: ${breakpoints.tablet}) {
		display: flex;
	}
`;

export const SummaryCard = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 6px;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.md};
	padding: 12px ${({ theme }) => theme.spacing.md};
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SummaryItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;

	& + & {
		border-left: 1px solid ${({ theme }) => theme.colors.border};
		padding-left: ${({ theme }) => theme.spacing.md};
	}
`;

export const SummaryLabel = styled.span`
	font-size: 11px;
	color: ${({ theme }) => theme.colors.textTertiary};
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
	white-space: nowrap;
`;

export const SummaryValue = styled.span<{ $tone?: 'primary' | 'success' | 'danger' }>`
	font-size: 15px;
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
	font-variant-numeric: tabular-nums;
	color: ${({ theme, $tone }) => ($tone ? theme.colors[$tone] : theme.colors.textPrimary)};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

	@media (min-width: ${breakpoints.tablet}) {
		font-size: 16px;
	}
`;

export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${({ theme }) => theme.spacing.md};

	@media (min-width: ${breakpoints.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
