import styled from 'styled-components';

export const FormItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FormItemLabel = styled.label`
	display: block;
	font-weight: ${({ theme }) => theme.fontsWeight.semiBold};
	color: ${({ theme }) => theme.colors.textPrimary};
	margin-bottom: 8px;
	font-size: 14px;
`;

export const FormItem = styled.input`
	height: 48px;
	border-radius: ${({ theme }) => theme.radius.md};
	border: 1px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.surfaceAlt};
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
	font-size: 15px;
	padding: 0 16px;
	width: 100%;
	transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

	&::placeholder {
		color: ${({ theme }) => theme.colors.textTertiary};
	}

	&:hover {
		border-color: ${({ theme }) => theme.colors.borderStrong};
	}

	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.colors.surface};
		border-color: ${({ theme }) => theme.colors.primary};
		box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryMuted};
	}
`;

export const SelectWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

export const Select = styled.select`
	appearance: none;
	height: 48px;
	width: 100%;
	border-radius: ${({ theme }) => theme.radius.md};
	border: 1px solid ${({ theme }) => theme.colors.border};
	background-color: ${({ theme }) => theme.colors.surfaceAlt};
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight: ${({ theme }) => theme.fontsWeight.medium};
	font-size: 15px;
	padding: 0 40px 0 16px;
	transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;

	&:hover {
		border-color: ${({ theme }) => theme.colors.borderStrong};
	}

	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.colors.surface};
		border-color: ${({ theme }) => theme.colors.primary};
		box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primaryMuted};
	}
`;

export const SelectChevron = styled.span`
	position: absolute;
	right: 16px;
	display: flex;
	pointer-events: none;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ButtonGroup = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 4px;

	& > * {
		flex: 1;
	}
`;
