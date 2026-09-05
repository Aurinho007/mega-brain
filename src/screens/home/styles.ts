import styled from 'styled-components';
import { breakpoints, contentMaxWidth } from '../../theme/theme';
import type { StatusLevel } from '../../componentes/card/styles';

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
	margin-top: 16px;
	margin-bottom: -12px;
`;

export const Toolbar = styled.div`
	display: none;
	align-items: center;
	gap: 10px;
	flex-shrink: 0;
	padding: 6px;
	border-radius: ${({ theme }) => theme.radius.lg};
	background-color: ${({ theme }) => theme.colors.surfaceGlass};
	border: 1px solid ${({ theme }) => theme.colors.borderStrong};
	backdrop-filter: blur(20px) saturate(180%);
	-webkit-backdrop-filter: blur(20px) saturate(180%);
	box-shadow: 0 8px 24px ${({ theme }) => theme.colors.shadow};

	@media (min-width: ${breakpoints.tablet}) {
		display: flex;
	}
`;

export const SummaryCard = styled.section`
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.spacing.sm};
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.lg};
	padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
	margin-bottom: ${({ theme }) => theme.spacing.lg};
	box-shadow: 0 1px 2px ${({ theme }) => theme.colors.shadow};
`;

export const SummaryHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing.sm};
`;

export const SummaryTitleGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	min-width: 0;
`;

export const SummaryIconBadge = styled.div<{ $status: StatusLevel }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	flex-shrink: 0;
	border-radius: ${({ theme }) => theme.radius.md};
	background-color: ${({ theme, $status }) => theme.colors[`${$status}Muted`]};
	color: ${({ theme, $status }) => theme.colors[$status]};
`;

export const SummaryHeaderText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
`;

export const SummaryLabel = styled.span`
	font-size: 11px;
	color: ${({ theme }) => theme.colors.textTertiary};
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
`;

export const SummaryTotalValue = styled.span`
	font-size: 17px;
	font-weight: ${({ theme }) => theme.fontsWeight.extraBold};
	font-variant-numeric: tabular-nums;
	color: ${({ theme }) => theme.colors.textPrimary};
	line-height: 1.2;

	@media (min-width: ${breakpoints.tablet}) {
		font-size: 19px;
	}
`;

export const SummaryPercentTag = styled.span<{ $status: StatusLevel }>`
	flex-shrink: 0;
	font-size: 12px;
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	padding: 4px 10px;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme, $status }) => theme.colors[`${$status}Muted`]};
	color: ${({ theme, $status }) => theme.colors[$status]};
`;

export const SummaryBar = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.surfaceAlt};
	width: 100%;
	height: 6px;
	border-radius: ${({ theme }) => theme.radius.pill};
	overflow: hidden;
`;

export const SummaryFillBar = styled.div<{ $conclusionPercent: number; $status: StatusLevel }>`
	height: 100%;
	width: ${(props) => props.$conclusionPercent}%;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme, $status }) => theme.colors[$status]};
	transition: width 0.3s ease;
`;

export const SummaryFooter = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${({ theme }) => theme.spacing.sm};
`;

export const SummaryFooterItem = styled.div<{ $align?: 'left' | 'right' }>`
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
	text-align: ${({ $align }) => $align ?? 'left'};
`;

export const SummaryValue = styled.span<{ $tone?: StatusLevel }>`
	font-size: 14px;
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
	font-variant-numeric: tabular-nums;
	color: ${({ theme, $tone }) => ($tone ? theme.colors[$tone] : theme.colors.textPrimary)};

	@media (min-width: ${breakpoints.tablet}) {
		font-size: 15px;
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
