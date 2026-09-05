import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './globalStyles';
import { ThemeModeProvider } from './theme/ThemeModeContext';
import { ToastProvider } from './componentes/toast/ToastContext';
import Home from './screens/home/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeModeProvider>
			<GlobalStyles />
			<ToastProvider>
				<Home />
			</ToastProvider>
		</ThemeModeProvider>
	</React.StrictMode>
);
