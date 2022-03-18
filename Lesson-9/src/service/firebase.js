// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDtDXjayJUDfntLxprQSSKozoSrWP5bI6M',
	authDomain: 'react-messenger-64a0e.firebaseapp.com',
	projectId: 'react-messenger-64a0e',
	storageBucket: 'react-messenger-64a0e.appspot.com',
	messagingSenderId: '903572136269',
	appId: '1:903572136269:web:5e81375cfe8b3515219704',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const signUp = (email, pass) =>
	createUserWithEmailAndPassword(auth, email, pass)
export const login = (email, pass) =>
	signInWithEmailAndPassword(auth, email, pass)
export const logout = () => signOut(auth)

export const db = getDatabase(app)
export const profileRef = ref(db, 'profile')
export const profileNameRef = ref(db, 'profile/name')
export const profileShowNameRef = ref(db, 'profile/showName')
export const chatsRef = ref(db, 'chats')
export const getChatsRefById = chatId => ref(db, `chats/${chatId}`)

export const messagesRef = ref(db, 'messages')
export const getMesssageListRefByChatId = chatId =>
	ref(db, `messages/${chatId}/messageList`)
export const getMesssagesRefByChatId = chatId => ref(db, `messages/${chatId}`)
export const getMesssageRefById = (chatId, msgId) =>
	ref(db, `messages/${chatId}/messageList/${msgId}`)
