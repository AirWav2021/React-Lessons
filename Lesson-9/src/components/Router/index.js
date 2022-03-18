import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { Chat } from '../Chat'
import { ChatList } from '../ChatList'
import Profile from '../Profile/index.js'
import { NotFoundPage } from '../../pages/NotFoundPage.js'
import { Articles } from '../Arcticles/Arcticles'
import { PublicRoute } from '../PublicRoute'
import { PrivateRoute } from '../PrivateRoute'
import { useEffect, useState } from 'react'
import { Home } from '../Home'
import './Router.scss'
import { auth } from '../../service/firebase'

export const Router = () => {
	const [authed, setAuthed] = useState(false)
	const authorize = () => {
		setAuthed(true)
	}
	const unauthorize = () => {
		setAuthed(false)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setAuthed(true)
				console.log('ВХОД')
			} else {
				setAuthed(false)
			}
		})
		return unsubscribe
	}, [])

	return (
		<BrowserRouter>
			<div className='App_wrapper'>
				<div className='Navigate'>
					<div>
						<NavLink to='/' className='link'>
							Home
						</NavLink>
					</div>
					<div>
						<NavLink to='/chats' className='link'>
							Chats
						</NavLink>
					</div>
					<div>
						<NavLink to='/profile' className='link'>
							Profile
						</NavLink>
					</div>
					<div>
						<NavLink to='/articles' className='link'>
							Articles
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route path='/' element={<PublicRoute authed={authed} />}>
						<Route path='' element={<Home />} />
						<Route path='/signup' element={<Home isSignUp />} />
					</Route>
					<Route path='/chats' element={<ChatList />}>
						<Route path=':chatId' element={<Chat />} />
					</Route>
					<Route path='/profile' element={<PrivateRoute authed={authed} />}>
						<Route path='' element={<Profile onLogout={unauthorize} />} />
					</Route>
					<Route path='/articles' element={<Articles />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Router
