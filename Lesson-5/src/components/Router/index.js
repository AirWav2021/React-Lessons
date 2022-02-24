import { Route, Routes, NavLink } from 'react-router-dom'
import Chat from '../Chat'
import { ChatList } from '../ChatList'
import { HomePage } from '../../pages/HomePage'
import { ProfilePage } from '../../pages/ProfilePage'
import { NotFoundPage } from '../../pages/NotFoundPage'
import { Context } from '../../utils/Context'
import { useContext, useState } from 'react'
import { Component } from 'react/cjs/react.development'

export const Router = () => {
	const [messageColor, setMessageColor] = useState('blue')
	return (
		<Context.Provider value={{ messageColor, setMessageColor }}>
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
		</Context.Provider>
	)
}

// const summ = (a, b) => a + b
// const mul = (a, b) => a * b

// const withLogger = fn => {
// 	return (...args) => {
// 		console.log(args)
// 		return fn(args)
// 	}
// }

// const summWithLogs = withLogger(summ)
// const multWithLogs = withLogger(mul)

// summWithLogs(1, 2)
// multWithLogs(1, 2)
// Компонент высшего порядка (Декоратор для компонента) функция которая принимает компонент и возращает новый компонент
// const withContext = Component => {
// 	return props => {
// 		const { messageColor } = useContext(Context)
// 		return <Component {...props} messageColor={messageColor} />
// 	}
// }

// export const FormWithLogger = withContext(CustomComponent)
