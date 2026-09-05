import styled from 'styled-components';
import { breakpoints } from '../../theme/theme';

type ShowProps = {
	$show: boolean;
};

export const Overlay = styled.div<ShowProps>`
	position: fixed;
	inset: 0;
	z-index: 999;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.overlay};
	backdrop-filter: blur(2px);
	opacity: ${({ $show }) => ($show ? 1 : 0)};
	pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
	transition: opacity 0.2s ease;

	@media (min-width: ${breakpoints.tablet}) {
		align-items: center;
		padding: ${({ theme }) => theme.spacing.lg};
	}
`;

export const Content = styled.div<ShowProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-height: 90vh;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-bottom: none;
	border-radius: ${({ theme }) => theme.radius.xl} ${({ theme }) => theme.radius.xl} 0 0;
	box-shadow: 0 -8px 30px ${({ theme }) => theme.colors.shadow};
	transform: translateY(${({ $show }) => ($show ? '0' : '100%')});
	transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);

	@media (min-width: ${breakpoints.tablet}) {
		max-width: 440px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.border};
		border-radius: ${({ theme }) => theme.radius.xl};
		box-shadow: 0 20px 60px ${({ theme }) => theme.colors.shadow};
		transform: ${({ $show }) => ($show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)')};
	}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: ${({ theme }) => theme.spacing.md};
	padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg} 0;
`;

export const Title = styled.h2`
	font-size: 21px;
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const CloseButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	flex-shrink: 0;
	border-radius: ${({ theme }) => theme.radius.pill};
	border: none;
	background-color: ${({ theme }) => theme.colors.surfaceAlt};
	color: ${({ theme }) => theme.colors.textSecondary};
	cursor: pointer;
	transition: background-color 0.15s ease, color 0.15s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.surfaceHover};
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	&:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.primary};
		outline-offset: 2px;
	}
`;

export const Body = styled.div`
	overflow-y: auto;
	padding: ${({ theme }) => theme.spacing.lg};
	padding-top: ${({ theme }) => theme.spacing.md};
`;
