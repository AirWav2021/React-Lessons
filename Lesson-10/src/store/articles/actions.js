import { apiUrl } from '../../utils/constants'

export const GET_ARTICLES_REQUEST = 'ARTICLES::GET_ARTICLES_REQUEST'
export const GET_ARTICLES_SUCCES = 'ARTICLES::GET_ARTICLES_SUCCES'
export const GET_ARTICLES_FAILURE = 'ARTICLES::GET_ARTICLES_FAILURE'

export const getArticleRequest = () => ({
	type: GET_ARTICLES_REQUEST,
	error: null,
})
export const getArticleSuccess = articles => ({
	type: GET_ARTICLES_SUCCES,
	payload: articles,
})
export const getArticleFailure = error => ({
	type: GET_ARTICLES_FAILURE,
	payload: error,
})

export const getArticles = () => async dispatch => {
	dispatch(getArticleRequest())
	try {
		const response = await fetch(apiUrl)
		if (!response.ok) {
			throw new Error(response.status)
		}
		const result = await response.json()
		dispatch(getArticleSuccess(result))
	} catch (error) {
		dispatch(getArticleFailure(error))
		console.warn(error)
	}
}
