import React, { createContext, useState } from 'react';
import { auth, googleProvider } from '../../src/config/firebase-config';
import {
	signOut,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));

	const signIn = async (email, password) => {
		try {
			const result = await createUserWithEmailAndPassword(auth, email, password);
      cookies.set('auth-token', result.user.refreshToken);
			setIsAuth(true);
      setIsAuthenticated(true);
		} catch (err) {
			console.error(err);
		}
	};
  const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			cookies.set('auth-token', result.user.refreshToken);
			setIsAuth(true);
      setIsAuthenticated(true);
		} catch (err) {
			console.error(err);
		}
	};
	const updateLoginStatus = async () => {
		await signOut(auth);
		cookies.remove('auth-token');
		setIsAuth(false);
		setIsAuthenticated(current => !current)
		{isAuthenticated && signInWithGoogle()}
	};

	const context = {
		signIn,
		isAuthenticated,
		updateLoginStatus,
		isAuth,
		setIsAuth,
	};

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};
