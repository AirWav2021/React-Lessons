import {
	getArticleFailure,
	getArticleRequest,
	getArticles,
	getArticleSuccess,
	GET_ARTICLES_SUCCES,
} from '../actions'

describe('getArcticlesSucces tests', () => {
	it('return obj with type and payload', () => {
		const payload = []
		const expected = {
			type: GET_ARTICLES_SUCCES,
			payload,
		}

		const received = getArticleSuccess(payload)
		expect(expected).toEqual(received)
	})
})

describe('getArticlesTest', () => {
	it('calls fn passed as an arg with getArticlesReq', () => {
		const mockDispatch = jest.fn()
		getArticles()(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(getArticleRequest())
	})
	it('calls fn passed as an arg with getArcticlesSucces if fetch was successful', async () => {
		const mockDispatch = jest.fn()
		const result = ['test']
		// eslint-disable-next-line no-undef
		fetchMock.mockResponseOnce(JSON.stringify(result))

		await getArticles()(mockDispatch)

		expect(mockDispatch).toHaveBeenLastCalledWith(getArticleSuccess(result))
	})
	it('calls fn passed as an arg with getArcticlesFail if fetch was unsuccessful', async () => {
		const mockDispatch = jest.fn()
		const result = ['test']
		const error = new Error('some fetch error')
		// eslint-disable-next-line no-undef
		fetchMock.mockRejectOnce(error)

		await getArticles()(mockDispatch)

		expect(mockDispatch).toHaveBeenLastCalledWith(getArticleFailure(error))
	})
})
