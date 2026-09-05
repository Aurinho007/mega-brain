import { MoonIcon, SunIcon } from '../icons/Icons';
import { useThemeMode } from '../../theme/ThemeModeContext';
import { ToggleButton } from './styles';

const ThemeToggle = () => {
	const { mode, toggleMode } = useThemeMode();
	const isDark = mode === 'dark';

	return (
		<ToggleButton
			type="button"
			onClick={toggleMode}
			aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
			aria-pressed={isDark}
			title={isDark ? 'Tema claro' : 'Tema escuro'}
		>
			{isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
		</ToggleButton>
	);
};

export default ThemeToggle;
