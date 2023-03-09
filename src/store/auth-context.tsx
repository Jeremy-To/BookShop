import React, { createContext, useState } from 'react';
import { auth, googleProvider } from '../config/firebase-config';
import {
	signOut,
	signInWithPopup,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import Cookies from 'universal-cookie';

type AuthContextProps = {
	children: React.ReactNode;
};

interface AuthContextType {
	signIn: (email: string, password: string) => Promise<void>;
	isAuthenticated: boolean;
	updateLoginStatus: () => Promise<void>;
	isAuth: string | undefined;
	setIsAuth: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<AuthContextType>({
	signIn: async () => {},
	isAuthenticated: false,
	updateLoginStatus: async () => {},
	isAuth: undefined,
	setIsAuth: () => {},
});

export const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isAuth, setIsAuth] = useState<string | undefined>(() => {
		return new Cookies().get('auth-token');
	});

	const signIn = async (email: string, password: string) => {
		try {
			const result = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			new Cookies().set('auth-token', result.user.refreshToken);
			setIsAuth(result.user.refreshToken);
			setIsAuthenticated(true);
		} catch (err) {
			console.error(err);
		}
	};

	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			new Cookies().set('auth-token', result.user.refreshToken);
			setIsAuth(result.user.refreshToken);
			setIsAuthenticated(true);
		} catch (err) {
			console.error(err);
		}
	};

	const updateLoginStatus = async () => {
		await signOut(auth);
		new Cookies().remove('auth-token');
		setIsAuth(undefined);
		setIsAuthenticated((current) => !current);
		if (isAuthenticated) {
			await signInWithGoogle();
		}
	};

	const contextValue: AuthContextType = {
		signIn,
		isAuthenticated,
		updateLoginStatus,
		isAuth,
		setIsAuth,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
