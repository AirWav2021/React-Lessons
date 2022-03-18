import { List } from '@mui/material'
import { Form } from '../Form/Form.js'
import { Outlet } from 'react-router-dom'
import { ChatItem } from './ChatItem.js'
import { selectChats } from '../../store/chats/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../../store/chats/actions.js'
import { useEffect, useState } from 'react'
import {
	child,
	onChildAdded,
	onChildRemoved,
	onValue,
	set,
} from 'firebase/database'
import {
	chatsRef,
	getChatsRefById,
	getMesssageRefById,
	getMesssagesRefByChatId,
} from '../../service/firebase.js'

export const ChatList = () => {
	// const chats = useSelector(selectChats)
	const [chats, setChats] = useState([])
	// const dispatch = useDispatch()

	const handleAddChat = newChatName => {
		const newId = `chat-${Date.now()}`
		// dispatch(addChat(newId, newChatName))
		set(getChatsRefById(newId), { id: newId, name: newChatName })
		set(getMesssagesRefByChatId(newId), { empty: true })
	}

	// useEffect(() => {
	// 	const unsubscribe = onValue(chatsRef, snapshot => {
	// 		const newChats = []
	// 		snapshot.forEach(child => {
	// 			newChats.push(child.val())
	// 		})
	// 		setChats(newChats)
	// 	})
	// 	return unsubscribe
	// }, [])

	useEffect(() => {
		const unsubscribeAdd = onChildAdded(chatsRef, snapshot => {
			setChats(prevChats => [...prevChats, snapshot.val()])
		})
		const unsubscribeRemove = onChildRemoved(chatsRef, snapshot => {
			// setChats(prevChats => [...prevChats, snapshot.val()])
			setChats(prevChats =>
				prevChats.filter(({ id }) => id !== snapshot.val()?.id),
			)
		})
		return unsubscribeAdd, unsubscribeRemove
	}, [])

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
