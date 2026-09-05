import 'styled-components';
import { AppTheme } from './theme';

// Faz o TypeScript conhecer o formato do nosso tema sempre que
// `props.theme` for usado dentro de um styled-component.
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends AppTheme {}
}
