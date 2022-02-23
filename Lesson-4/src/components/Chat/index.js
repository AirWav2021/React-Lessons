import React, { useRef, useState } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import { Form } from '../Form'
import { useEffect } from 'react/cjs/react.development'
import { AUTHORS } from '../../utils/constants'
import { ChatList } from '../ChatList'
import { MessageList } from '../MessageList'
import { Navigate, useParams } from 'react-router-dom'

const myText = 'React Messenger'

// eslint-disable-next-line no-unused-vars
const chats = [{ id: 'chat1' }]
const messages = {
	chat1: [],
}

function Chat() {
	const { chatId } = useParams()
	console.log(chatId)

	const [messageList, setMessageList] = useState({
		chat1: [],
		chat2: [],
	})
	const messageEnd = useRef()

	const handleAddMessage = messageText => {
		sendMessage(messageText, AUTHORS.USER)
	}

	const sendMessage = (messageText, author) => {
		const newMessage = {
			messageText,
			author,
			id: `msg-${Date.now()}`,
		}
		setMessageList(prevMessageList => ({
			...prevMessageList,
			[chatId]: [...prevMessageList[chatId], newMessage],
		}))
	}

	useEffect(() => {
		messageEnd.current?.scrollIntoView()
		let timeout
		if (
			messageList[chatId]?.[messageList[chatId]?.length - 1]?.author ===
			AUTHORS.USER
		) {
			timeout = setTimeout(() => {
				sendMessage('Сообщение отправлено', AUTHORS.BOT)
			}, 1000)
		}

		return () => {
			clearTimeout(timeout)
		}
	}, [messageList])

	if (!messageList[chatId]) {
		return <Navigate to='/chats' replace />
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<h2 className='title'>{myText}</h2>
				<img src={logo} className='App-logo' alt='logo' />
				<div>
					<div className='chatlist'>
						<ChatList />
					</div>
					<div className='message-content'>
						<MessageList messages={messageList[chatId]} />
						<div ref={messageEnd} />
					</div>
					<Form onSubmit={handleAddMessage}></Form>
				</div>
			</header>
		</div>
	)
}

export default Chat
