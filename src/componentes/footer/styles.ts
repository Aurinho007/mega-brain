import styled, { css } from 'styled-components';
import { breakpoints } from '../../theme/theme';

// O wrapper ocupa a largura da tela só para centralizar a barra, mas não
// intercepta cliques fora dela (pointer-events volta a "auto" na Bar).
export const Wrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 80;
	display: flex;
	justify-content: center;
	padding: 0 ${({ theme }) => theme.spacing.lg};
	padding-bottom: max(${({ theme }) => theme.spacing.lg}, calc(env(safe-area-inset-bottom) + 12px));
	pointer-events: none;

	@media (min-width: ${breakpoints.tablet}) {
		display: none;
	}
`;

export const Bar = styled.div`
	pointer-events: auto;
	display: flex;
	align-items: stretch;
	width: 100%;
	max-width: 380px;
	gap: 4px;
	padding: 6px;
	background-color: ${({ theme }) => theme.colors.surfaceGlass};
	backdrop-filter: blur(28px) saturate(200%) contrast(110%);
	-webkit-backdrop-filter: blur(28px) saturate(200%) contrast(110%);
	border: 1px solid ${({ theme }) => theme.colors.borderStrong};
	border-radius: ${({ theme }) => theme.radius.pill};
	box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadow}, 0 2px 6px ${({ theme }) => theme.colors.shadow};
`;

export const Segment = styled.button<{ $variant: 'primary' | 'ghost' }>`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	height: 46px;
	padding: 0 14px;
	border: none;
	border-radius: ${({ theme }) => theme.radius.pill};
	font-size: 14px;
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	white-space: nowrap;
	transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
	background-color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.primary : 'transparent')};
	color: ${({ theme, $variant }) => ($variant === 'primary' ? theme.colors.onPrimary : theme.colors.textPrimary)};

	&:active {
		transform: scale(0.96);
	}

	${({ $variant }) =>
		$variant === 'ghost' &&
		css`
			&:hover {
				background-color: ${({ theme }) => theme.colors.surfaceHover};
			}
		`}
`;
