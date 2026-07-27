import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './globalStyles';
import Home from './screens/home/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<Home />
	</React.StrictMode>
);
