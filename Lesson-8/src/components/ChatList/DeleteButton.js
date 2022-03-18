import { Button } from '@mui/material'
import { remove, set } from 'firebase/database'
import { useDispatch } from 'react-redux'
import { getChatsRefById } from '../../service/firebase'
import { deleteChat } from '../../store/chats/actions'

export const DeleteButton = ({ id }) => {
	// const dispatch = useDispatch()

	const handleDeleteChat = () => {
		// dispatch(deleteChat(id))
		// set(getChatsRefById(id), null)
		remove(getChatsRefById(id))
	}

	return <Button onClick={handleDeleteChat}>&times;</Button>
}
