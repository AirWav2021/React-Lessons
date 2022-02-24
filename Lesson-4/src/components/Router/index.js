import { Route, Routes, NavLink } from 'react-router-dom'
import Chat from '../Chat'
import { ChatList } from '../ChatList'
import { HomePage } from '../../pages/HomePage'
import { ProfilePage } from '../../pages/ProfilePage'
import { NotFoundPage } from '../../pages/NotFoundPage'

export const Router = () => {
	return (
		<>
			<div className='flex justify-between max-w-md align-center m-auto p-10'>
				<div>
					<NavLink
						to='/'
						style={({ isActive }) => ({ color: isActive ? 'green' : 'grey' })}
					>
						home
					</NavLink>
				</div>
				<div>
					<NavLink
						to='/chats'
						style={({ isActive }) => ({ color: isActive ? 'green' : 'grey' })}
					>
						chats
					</NavLink>
				</div>
				<div>
					<NavLink to='/profile' className='link'>
						Profile
					</NavLink>
				</div>
			</div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/chats' element={<ChatList />}>
					<Route path=':chatId' element={<Chat />} />
				</Route>
				<Route path='profile' element={<ProfilePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
