import * as test from '../actions'

describe('profileAction test', () => {
	it('toggleShowName test', () => {
		const expectedAction = {
			type: test.TOGGLE_SHOW_NAME,
		}
		expect(test.toggleShowName()).toEqual(expectedAction)
	})

	it('setName test', () => {
		const expectedAction = {
			type: test.SET_NAME,
			payload: 'name',
		}
		expect(test.setName(expectedAction.payload)).toEqual(expectedAction)
	})
})
