export const ADD_MESSSAGE = 'MESSAGE--ADD_MESSAGE'
export const addMessage = (chatId, newMsg) => ({
	type: ADD_MESSSAGE,
	payload: {
		chatId,
		newMsg,
	},
})
