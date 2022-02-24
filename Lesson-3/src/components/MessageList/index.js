import { Message } from '../Message/Message'

export const MessageList = ({ messages }) => {
	console.log(messages[0]?.author)
	return messages.map(message => (
		<Message
			key={message.id}
			text={message.messageText}
			author={message.author}
		/>
	))
}
