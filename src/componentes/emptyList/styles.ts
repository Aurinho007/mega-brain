import styled from 'styled-components';
import { breakpoints } from '../../theme/theme';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	padding: 64px ${({ theme }) => theme.spacing.lg} 40px;
`;

export const IllustrationWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	height: 120px;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme }) => theme.colors.primaryMuted};
	color: ${({ theme }) => theme.colors.primary};
	margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Badge = styled.div`
	position: absolute;
	right: 4px;
	bottom: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border-radius: ${({ theme }) => theme.radius.pill};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.onPrimary};
	border: 3px solid ${({ theme }) => theme.colors.background};
`;

export const Title = styled.p`
	font-weight: ${({ theme }) => theme.fontsWeight.bold};
	font-size: 20px;
	color: ${({ theme }) => theme.colors.textPrimary};
	margin-bottom: 8px;
`;

export const Label = styled.p`
	font-weight: ${({ theme }) => theme.fontsWeight.regular};
	font-size: 15px;
	color: ${({ theme }) => theme.colors.textSecondary};
	max-width: 280px;
`;

// No mobile a ação já fica disponível na barra fixa inferior (Footer),
// então esse CTA só aparece em telas maiores, onde a barra fica oculta.
export const CtaWrapper = styled.div`
	display: none;
	margin-top: ${({ theme }) => theme.spacing.xl};

	@media (min-width: ${breakpoints.tablet}) {
		display: flex;
	}
`;
