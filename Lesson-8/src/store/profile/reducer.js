import { TOGGLE_SHOW_NAME, SET_NAME } from './actions.js'

const initialState = {
	showName: false,
	name: 'Default',
}

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SHOW_NAME:
			return {
				...state,
				showName: !state.showName,
			}
		case SET_NAME:
			return {
				...state,
				name: action.payload,
			}
		default:
			return state
	}
}
