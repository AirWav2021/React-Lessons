import { initialState, profileReducer } from '../reducer'
import { SET_NAME, TOGGLE_SHOW_NAME } from '../actions'

describe('profileReducer test', () => {
	it('TOGGLE_SHOW_NAME test', () => {
		const action = {
			type: TOGGLE_SHOW_NAME,
		}

		expect(profileReducer(initialState, action)).toEqual({
			...initialState,
			name: 'Default',
			showName: true,
		})
	})

	it('SET_NAME test', () => {
		const action = {
			type: SET_NAME,
			name: 'Default',
		}

		expect(profileReducer(initialState, action)).toEqual({
			...initialState,
			showName: false,
			name: action.payload,
		})
	})
})
