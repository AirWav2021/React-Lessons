import { List } from '@mui/material'
import { Form } from '../Form/Form.js'
import { Outlet } from 'react-router-dom'
import { ChatItem } from './ChatItem.js'
import { selectChats } from '../../store/chats/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../../store/chats/actions.js'

export const ChatList = () => {
	const chats = useSelector(selectChats)
	const dispatch = useDispatch()

	const handleAddChat = newChatName => {
		const newId = `chat-${Date.now()}`
		dispatch(addChat(newId, newChatName))
	}

	return (
		<>
			<List>
				{chats.map(chat => (
					<ChatItem chat={chat} key={chat.id} />
				))}
			</List>
			<Form onSubmit={handleAddChat} />
			<Outlet />
		</>
	)
}
