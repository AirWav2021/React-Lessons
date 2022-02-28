import { ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton.js'

const ChatItem = ({ chat, onDeleteChat }) => (
	<ListItem sx={{ justifyContent: 'center', margin: 'auto' }} key={chat.id}>
		<Link to={`/chats/${chat.id}`}>{chat.name}</Link>
		<DeleteButton id={chat.id} onClick={onDeleteChat} />
	</ListItem>
)

export default ChatItem
