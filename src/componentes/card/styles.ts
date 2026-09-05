import styled, { css, keyframes } from 'styled-components';

export type StatusLevel = 'success' | 'warning' | 'danger';

const statusColor = css<{ $status: StatusLevel }>`
	color: ${({ theme, $status }) => theme.colors[$status]};
`;

export const Container = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.lg};
	padding: ${({ theme }) => theme.spacing.lg};
	box-shadow: 0 1px 2px ${({ theme }) => theme.colors.shadow};
	transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors.borderStrong};
		box-shadow: 0 6px 20px ${({ theme }) => theme.colors.shadow};
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: ${({ theme }) => theme.spacing.sm};
	margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TitleGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
`;

export const IconBadge = styled.div<{ $status: StatusLevel }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	flex-shrink: 0;
	border-radius: ${({ theme }) => theme.radius.md};
	background-color: ${({ theme, $status }) => theme.colors[`${$status}Muted`]};
	${statusColor}
`;

export const Title = styled.p`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const MenuWrapper = styled.div`
	position: relative;
	flex-shrink: 0;
`;

export const MenuButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: ${({ theme }) => theme.radius.pill};
	background: transparent;
	border: none;
	color: ${({ theme }) => theme.colors.textTertiary};
	transition: background-color 0.15s ease, color 0.15s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.surfaceAlt};
		color: ${({ theme }) => theme.colors.textPrimary};
	}
`;

const menuAppear = keyframes`
	from {
		opacity: 0;
		transform: translateY(-4px) scale(0.98);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
`;

export const ActionMenu = styled.div`
	position: absolute;
	right: 0;
	top: 40px;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => theme.radius.md};
	padding: 6px;
	min-width: 190px;
	box-shadow: 0 12px 32px ${({ theme }) => theme.colors.shadow};
	z-index: 10;
	animation: ${menuAppear} 0.12s ease-out;
`;

export const ActionOption = styled.button<{ $danger?: boolean }>`
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	text-align: left;
	padding: 9px 10px;
	border-radius: ${({ theme }) => theme.radius.sm};
	background: transparent;
	color: ${({ theme, $danger }) => (
		$danger ? theme.colors.danger : theme.colors.textPrimary
	)};
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
	font-size: 14px;

	&:hover {
		background-color: ${({ theme, $danger }) => (
			$danger ? theme.colors.dangerMuted : theme.colors.surfaceAlt
		)};
	}
`;

export const Line = styled.div`
	display: flex;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing.md};
	margin-bottom: 14px;
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

export const Value = styled.p`
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	font-size: 16px;
	margin-bottom: 2px;
	font-variant-numeric: tabular-nums;
`;

export const ValueHighlight = styled(Value)<{ $status: StatusLevel }>`
	${statusColor}
`;

export const Label = styled.p`
	color: ${({ theme }) => theme.colors.textTertiary};
	font-weight: ${({ theme }) => theme.fontsWeight.regular};
	font-size: 12px;
`;

export const Bar = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.surfaceAlt};
	width: 100%;
	height: 8px;
	border-radius: ${({ theme }) => theme.radius.pill};
	overflow: hidden;
`;

export const FillBar = styled.div<{ $conclusionPercent: number; $status: StatusLevel }>`
	height: 100%;
	width: ${(props) => props.$conclusionPercent}%;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme, $status }) => theme.colors[$status]};
	transition: width 0.3s ease;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
`;

export const Legend = styled.p`
	color: ${({ theme }) => theme.colors.textTertiary};
	font-weight: ${({ theme }) => theme.fontsWeight.regular};
	font-size: 12px;
`;

export const PercentTag = styled.span<{ $status: StatusLevel }>`
	font-size: 11px;
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	padding: 2px 8px;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme, $status }) => theme.colors[`${$status}Muted`]};
	${statusColor}
`;
