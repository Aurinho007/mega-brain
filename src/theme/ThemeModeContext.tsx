import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const STORAGE_KEY = '@mega-brain:theme-mode';

export type ThemeMode = 'light' | 'dark';

type ThemeModeContextValue = {
	mode: ThemeMode;
	toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

const getStoredMode = (): ThemeMode | null => {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		return stored === 'light' || stored === 'dark' ? stored : null;
	} catch {
		return null;
	}
};

const getSystemMode = (): ThemeMode => {
	if (typeof window === 'undefined' || !window.matchMedia) return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

type ThemeModeProviderProps = {
	children: ReactNode;
};

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
	const [mode, setMode] = useState<ThemeMode>(() => getStoredMode() ?? getSystemMode());
	const [isManual, setIsManual] = useState<boolean>(() => getStoredMode() !== null);

	// Enquanto o usuário não escolher um tema manualmente, seguimos a
	// preferência do sistema operacional (inclusive se ela mudar em tempo real).
	useEffect(() => {
		if (isManual || typeof window === 'undefined' || !window.matchMedia) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (event: MediaQueryListEvent) => {
			setMode(event.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, [isManual]);

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', mode);
		document.documentElement.style.colorScheme = mode;

		const themeColorMeta = document.querySelector('meta[name="theme-color"]');
		themeColorMeta?.setAttribute('content', mode === 'dark' ? '#0E0F14' : '#F6F7FB');
	}, [mode]);

	const toggleMode = () => {
		setMode((previous) => {
			const next: ThemeMode = previous === 'dark' ? 'light' : 'dark';

			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch {
				// localStorage indisponível (ex: modo privado) — segue apenas em memória
			}

			return next;
		});
		setIsManual(true);
	};

	const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);
	const contextValue = useMemo(() => ({ mode, toggleMode }), [mode]);

	return (
		<ThemeModeContext.Provider value={contextValue}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeModeContext.Provider>
	);
};

export const useThemeMode = (): ThemeModeContextValue => {
	const context = useContext(ThemeModeContext);

	if (!context) {
		throw new Error('useThemeMode precisa ser usado dentro de um ThemeModeProvider');
	}

	return context;
};
