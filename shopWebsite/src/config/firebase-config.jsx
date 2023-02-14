import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBVbU5j-BCm9UfMztACGpynFDLBWammYGA',
	authDomain: 'chat-1a09d.firebaseapp.com',
	projectId: 'chat-1a09d',
	storageBucket: 'chat-1a09d.appspot.com',
	messagingSenderId: '1048020367320',
	appId: '1:1048020367320:web:baf7ebd39faf426c7fa4ad',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
