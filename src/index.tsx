import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { CartContextProvider } from './store/on-cart-context';
import { AuthContextProvider } from './store/auth-context';

const element = document.getElementById('root');
const root = createRoot(element!);
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<CartContextProvider>
				<App />
			</CartContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
