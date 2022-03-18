import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router'
import { MessageList } from '../MessageList/index.js'
import { Form } from '../Form/Form'
import { AUTHORS } from '../../utils/constants'
import { selectMessages } from '../../store/messages/selectors'
import { addMessageWithThunk } from '../../store/messages/actions'
import '../../App.css'
import { onChildAdded, onChildRemoved, onValue, set } from 'firebase/database'
import {
	getMesssageListRefByChatId,
	getMesssageRefById,
	getMesssagesRefByChatId,
} from '../../service/firebase.js'

export function Chat() {
	const params = useParams()
	const { chatId } = params

	// const messages = useSelector(selectMessages)
	const [messages, setMessages] = useState([])
	const dispatch = useDispatch()

	const messagesEnd = useRef()

	const handleMessage = text => {
		sendMessage(text, AUTHORS.USER)
	}

	const sendMessage = (text, author) => {
		const newMsg = {
			text,
			author,
			id: `msg-${Date.now()}`,
		}
		// dispatch(addMessageWithThunk(chatId, newMsg))
		set(getMesssageRefById(chatId, newMsg.id), newMsg)
	}

	useEffect(() => {
		const unsubscribe = onValue(getMesssagesRefByChatId(chatId), snapshot => {
			if (!snapshot.val()?.empty) {
				setMessages(null)
			}
		})
		return unsubscribe
	}, [chatId])

	useEffect(() => {
		const unsubscribe = onChildAdded(
			getMesssageListRefByChatId(chatId),
			snapshot => {
				console.log(snapshot.val())
				setMessages(prevMessages => [...prevMessages, snapshot.val()])
			},
		)
		return unsubscribe
	}, [chatId])

	useEffect(() => {
		const unsubscribe = onChildRemoved(
			getMesssageListRefByChatId(chatId),
			snapshot => {
				console.log(snapshot.val())
				setMessages(prevMessages =>
					prevMessages.filter(({ id }) => id !== snapshot.val()?.id),
				)
			},
		)
		return unsubscribe
	}, [chatId])

	useEffect(() => {
		messagesEnd.current?.scrollIntoView()
	}, [messages])

	if (!messages) {
		return <Navigate to='/chats' replace />
	}

	return (
		<div className='App'>
			<div className='App-header'>
				<div className='App-wrapper'>
					<div className='App-content'>
						<MessageList messages={messages} />
					</div>
					<Form onSubmit={handleMessage} />
				</div>
			</div>
		</div>
	)
}
