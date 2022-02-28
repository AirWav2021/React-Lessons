import { List } from '@mui/material'
import { Form } from '../Form/Form.js'
import { Outlet } from 'react-router-dom'
import ChatItem from './ChatItem.js'

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
	<>
		<List>
			{chats.map(chat => (
				<ChatItem chat={chat} onDeleteChat={onDeleteChat} key={chat.id} />
			))}
		</List>
		<Form onSubmit={onAddChat} />
		<Outlet />
	</>
)
