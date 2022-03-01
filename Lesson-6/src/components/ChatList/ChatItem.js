import { ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { DeleteButton } from './DeleteButton.js'

export const ChatItem = ({ chat, onDeleteChat }) => (
	<ListItem sx={{ justifyContent: 'center', margin: 'auto' }} key={chat.id}>
		<Link to={`/chats/${chat.id}`}>{chat.name}</Link>
		<DeleteButton id={chat.id} />
	</ListItem>
)
