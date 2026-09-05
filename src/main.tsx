import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './globalStyles';
import { ThemeModeProvider } from './theme/ThemeModeContext';
import Home from './screens/home/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeModeProvider>
			<GlobalStyles />
			<Home />
		</ThemeModeProvider>
	</React.StrictMode>
);
