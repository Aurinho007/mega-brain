// Design tokens para os temas claro e escuro do Mega Brain.
// Um único objeto de tema é injetado via styled-components ThemeProvider,
// então todo componente lê cores/espaçamentos por `props.theme` em vez de
// valores fixos — isso é o que permite trocar de tema em tempo real.

export const breakpoints = {
	tablet: '640px',
	desktop: '900px',
};

// Largura máxima do conteúdo central (header, cards, toolbar) para manter
// tudo alinhado e legível também em telas grandes.
export const contentMaxWidth = '760px';

export const spacing = {
	xs: '4px',
	sm: '8px',
	md: '16px',
	lg: '24px',
	xl: '32px',
	xxl: '48px',
};

export const radius = {
	sm: '8px',
	md: '12px',
	lg: '16px',
	xl: '20px',
	pill: '999px',
};

export const fontsWeight = {
	regular: 400,
	medium: 500,
	semiBold: 600,
	bold: 700,
	extraBold: 800,
};

export type ThemeColors = {
	background: string;
	surface: string;
	surfaceAlt: string;
	surfaceHover: string;
	surfaceGlass: string;
	border: string;
	borderStrong: string;

	textPrimary: string;
	textSecondary: string;
	textTertiary: string;
	onPrimary: string;

	primary: string;
	primaryHover: string;
	primaryMuted: string;

	success: string;
	successMuted: string;
	warning: string;
	warningMuted: string;
	danger: string;
	dangerMuted: string;

	overlay: string;
	shadow: string;
};

export type AppTheme = {
	mode: 'light' | 'dark';
	colors: ThemeColors;
	spacing: typeof spacing;
	radius: typeof radius;
	fontsWeight: typeof fontsWeight;
};

export const lightTheme: AppTheme = {
	mode: 'light',
	colors: {
		background: '#F6F7FB',
		surface: '#FFFFFF',
		surfaceAlt: '#F1F2F7',
		surfaceHover: '#EAECF3',
		surfaceGlass: 'rgba(255, 255, 255, 0.82)',
		border: '#E3E5EE',
		borderStrong: '#CDD1DF',

		textPrimary: '#14161F',
		textSecondary: '#5B5F70',
		textTertiary: '#9497A8',
		onPrimary: '#FFFFFF',

		primary: '#4F46E5',
		primaryHover: '#4338CA',
		primaryMuted: '#EEECFD',

		success: '#0E9F6E',
		successMuted: '#E3F9EF',
		warning: '#D97706',
		warningMuted: '#FDF2DD',
		danger: '#DC2626',
		dangerMuted: '#FCEAEA',

		overlay: 'rgba(15, 17, 26, 0.55)',
		shadow: 'rgba(20, 22, 31, 0.12)',
	},
	spacing,
	radius,
	fontsWeight,
};

export const darkTheme: AppTheme = {
	mode: 'dark',
	colors: {
		background: '#0E0F14',
		surface: '#181A22',
		surfaceAlt: '#20222D',
		surfaceHover: '#282B38',
		surfaceGlass: 'rgba(24, 26, 34, 0.78)',
		border: '#2B2E3A',
		borderStrong: '#3A3E4E',

		textPrimary: '#F3F4F8',
		textSecondary: '#A7ABBD',
		textTertiary: '#71758A',
		onPrimary: '#FFFFFF',

		primary: '#818CF8',
		primaryHover: '#A5B4FC',
		primaryMuted: 'rgba(129, 140, 248, 0.16)',

		success: '#34D399',
		successMuted: 'rgba(52, 211, 153, 0.14)',
		warning: '#FBBF24',
		warningMuted: 'rgba(251, 191, 36, 0.14)',
		danger: '#F87171',
		dangerMuted: 'rgba(248, 113, 113, 0.14)',

		overlay: 'rgba(3, 4, 8, 0.7)',
		shadow: 'rgba(0, 0, 0, 0.45)',
	},
	spacing,
	radius,
	fontsWeight,
};
