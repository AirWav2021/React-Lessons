export const TOGGLE_SHOW_NAME = 'PROFILE--TOGGLE_SHOW_NAME'
export const SET_NAME = 'PROFILE--SET_NAME'

export const toggleShowName = {
	type: TOGGLE_SHOW_NAME,
}

export const setName = newName => ({
	type: SET_NAME,
	payload: newName,
})
