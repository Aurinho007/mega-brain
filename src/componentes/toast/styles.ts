import styled from 'styled-components';
import { breakpoints } from '../../theme/theme';
import type { ToastType } from './ToastContext';

// O viewport ocupa a largura da tela só para centralizar os toasts, mas não
// intercepta cliques fora deles (pointer-events volta a "auto" no Toast).
export const Viewport = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1200;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: ${({ theme }) => theme.spacing.md};
	padding-top: max(${({ theme }) => theme.spacing.md}, calc(env(safe-area-inset-top) + 12px));
	pointer-events: none;

	@media (min-width: ${breakpoints.tablet}) {
		padding-top: ${({ theme }) => theme.spacing.lg};
	}
`;

export const Toast = styled.div<{ $type: ToastType; $leaving: boolean }>`
	pointer-events: auto;
	display: flex;
	align-items: center;
	gap: 10px;
	width: 100%;
	max-width: 360px;
	padding: 12px 16px;
	background-color: ${({ theme }) => theme.colors.surface};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-left: 3px solid ${({ theme, $type }) => theme.colors[$type]};
	border-radius: ${({ theme }) => theme.radius.md};
	box-shadow: 0 12px 30px ${({ theme }) => theme.colors.shadow};
	opacity: ${({ $leaving }) => ($leaving ? 0 : 1)};
	transform: translateY(${({ $leaving }) => ($leaving ? '-8px' : '0')});
	transition: opacity 0.2s ease, transform 0.2s ease;
`;

export const IconBadge = styled.div<{ $type: ToastType }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 26px;
	height: 26px;
	flex-shrink: 0;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme, $type }) => theme.colors[`${$type}Muted`]};
	color: ${({ theme, $type }) => theme.colors[$type]};
`;

export const Message = styled.span`
	font-size: 14px;
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
	color: ${({ theme }) => theme.colors.textPrimary};
	line-height: 1.35;
`;
