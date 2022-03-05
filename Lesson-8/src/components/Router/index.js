import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Chat } from '../Chat'
import { ChatList } from '../ChatList'
import Profile from '../Profile/index.js'
import { HomePage } from '../../pages/HomePage.js'
import { NotFoundPage } from '../../pages/NotFoundPage.js'
import { Articles } from '../Arcticles/Arcticles'
import './Router.scss'

export const Router = () => {
	// const messages = useSelector(selectMessages)

	// const chatList = useSelector(state => state.chats)
	// const dispatch = useDispatch()

	// const handleAddMessage = (chatId, newMessage) => {
	// 	dispatch(addMessage(chatId, newMessage))
	// }

	// const handleAddChat = newChatName => {
	// 	const newId = `chat-${Date.now()}`
	// 	dispatch(addChat(newId, newChatName))
	// }

	// const handleDeleteChat = idToDelete => {
	// 	dispatch(deleteChat(idToDelete))
	// }

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
					<Route path='' element={<HomePage />} />
					<Route path='/chats' element={<ChatList />}>
						<Route path=':chatId' element={<Chat />} />
					</Route>
					<Route path='/profile' element={<Profile />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Router
