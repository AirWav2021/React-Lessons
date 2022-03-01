import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { addChat, deleteChat } from '../../store/chats/actions.js'
import { Chat } from '../Chat'
import { ChatList } from '../ChatList'
import Profile from '../Profile/index.js'
import { HomePage } from '../../pages/HomePage.js'
import { NotFoundPage } from '../../pages/NotFoundPage.js'
// import { selectMessages } from '../../store/messages/selectors.js'
// import { addMessage } from '../../store/messages/actions.js'
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
					<NavLink to='/' className='link'>
						Home
					</NavLink>
					<NavLink to='/chats' className='link'>
						Chats
					</NavLink>
					<NavLink to='/profile' className='link'>
						Profile
					</NavLink>
				</div>
				<Routes>
					<Route path='' element={<HomePage />} />
					<Route
						path='chats'
						element={
							<ChatList
							// onAddChat={handleAddChat}
							// onDeleteChat={handleDeleteChat}
							// chats={chatList}
							/>
						}
					>
						<Route path=':chatId' element={<Chat />} />
					</Route>
					<Route path='profile' element={<Profile />}></Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default Router
