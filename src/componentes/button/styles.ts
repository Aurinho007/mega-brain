import styled, { css } from 'styled-components';

type ButtonProps = {
	$fullWidth: boolean;
};

const baseButton = css<ButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	height: 48px;
	padding: 0 24px;
	width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
	border-radius: ${({ theme }) => theme.radius.pill};
	font-size: 15px;
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	white-space: nowrap;
	transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.1s ease,
		box-shadow 0.15s ease;

	&:active:not(:disabled) {
		transform: scale(0.98);
	}

	&:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}
`;

export const PrimaryButton = styled.button<ButtonProps>`
	${baseButton}
	border: 1px solid transparent;
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.onPrimary};
	box-shadow: 0 8px 20px -8px ${({ theme }) => theme.colors.primary};

	&:hover:not(:disabled) {
		background-color: ${({ theme }) => theme.colors.primaryHover};
	}
`;

export const SecondaryButton = styled.button<ButtonProps>`
	${baseButton}
	border: 1px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.surface};
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover:not(:disabled) {
		background-color: ${({ theme }) => theme.colors.surfaceHover};
		border-color: ${({ theme }) => theme.colors.borderStrong};
	}
`;
