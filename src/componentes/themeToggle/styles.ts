import styled from 'styled-components';

export const ToggleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: ${({ theme }) => theme.radius.pill};
	border: 1px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.surface};
	color: ${({ theme }) => theme.colors.textSecondary};
	cursor: pointer;
	flex-shrink: 0;
	transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease, transform 0.1s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.surfaceHover};
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	&:active {
		transform: scale(0.94);
	}

	&:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.primary};
		outline-offset: 2px;
	}
`;
