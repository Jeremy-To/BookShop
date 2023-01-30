import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './store/on-cart-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<CartContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CartContextProvider>
);
