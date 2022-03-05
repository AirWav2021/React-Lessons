import { AUTHORS } from '../../utils/constants'

export const ADD_MESSSAGE = 'MESSAGE--ADD_MESSAGE'
export const addMessage = (chatId, newMsg) => ({
	type: ADD_MESSSAGE,
	payload: {
		chatId,
		newMsg,
	},
})

let timeout

export const addMessageWithThunk = (chatId, newMsg) => (dispatch, getState) => {
	dispatch(addMessage(chatId, newMsg))

	if (newMsg.author !== AUTHORS.BOT) {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			const messageFromBot = {
				text: 'сообщение отправлено',
				author: AUTHORS.BOT,
				id: `msg-${Date.now()}`,
			}
			dispatch(addMessage(chatId, messageFromBot))
		}, 2000)
	}
}
