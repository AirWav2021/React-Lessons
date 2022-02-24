import { Message } from '../Message/Message'

export const MessageList = ({ messages }) => {
	return messages.map(message => (
		<Message
			key={message.id}
			text={message.messageText}
			author={message.author}
		/>
	))
}
