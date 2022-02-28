import { useState, useEffect, useRef } from 'react'
import '../../App.css'
import { MessageList } from '../MessageList/index.js'
import { Form } from '../Form/Form'
import { Navigate, useParams } from 'react-router'
import { AUTHORS } from '../../utils/constants'

export function Chat({ messages, addMessage }) {
	const params = useParams()
	const { chatId } = params

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
		addMessage(chatId, newMsg)
	}

	useEffect(() => {
		messagesEnd.current?.scrollIntoView()

		let timeout
		if (
			messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.USER
		) {
			timeout = setTimeout(() => {
				sendMessage('Сообщение отправлено', AUTHORS.BOT)
			}, 1000)
		}
		return () => clearTimeout(timeout)
	}, [messages])

	if (!messages[chatId]) {
		return <Navigate to='/chats' replace />
	}

	return (
		<div className='App'>
			<div className='App-header'>
				<div className='App-wrapper'>
					<div className='App-content'>
						<MessageList messages={messages[chatId]} />
					</div>
					<Form onSubmit={handleMessage} />
				</div>
			</div>
		</div>
	)
}
