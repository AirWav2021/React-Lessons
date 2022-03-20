import { Button, CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../store/articles/actions'
import {
	selectArticles,
	selectArticlesIsLoading,
	selectError,
} from '../../store/articles/selectors'

export const Articles = () => {
	const dispatch = useDispatch()
	const error = useSelector(selectError)
	const isLoading = useSelector(selectArticlesIsLoading)
	const articles = useSelector(selectArticles)

	const getData = async () => {
		dispatch(getArticles())
	}
	useEffect(() => {
		getData()
	}, [])
	// ASYNC / AWAIT
	// const getData = async () => {
	// 	setIsLoading(true)
	// 	setError(false)
	// 	try {
	// 		const response = await fetch(apiUrl)
	// 		if (!response.ok) {
	// 			throw new Error(response.status)
	// 		}
	// 		const result = await response.json()
	// 		setArticles(result)
	// 	} catch (error) {
	// 		setError(true)
	// 		console.warn(error)
	// 	} finally {
	// 		setIsLoading(false)
	// 	}
	// }

	//STANDART PROMISE
	// useEffect(() => {
	// 	setIsLoading(true)
	// 	setError(false)
	// 	fetch(apiUrl)
	// 		.then(response => {
	// 			if (!response.ok) {
	// 				throw new Error(response.status)
	// 			}

	// 			return response.json()
	// 		})
	// 		.then(result => setArticles(result))
	// 		.catch(error => {
	// 			setError(true)
	// 			console.warn(error)
	// 		})
	// 		.finally(() => {
	// 			setIsLoading(false)
	// 		})
	// }, [])

	return (
		<>
			<h2 className='text-center mt-5 text-4xl'>games on the PlayStation 4</h2>
			<Button onClick={getData} variant='contained'>
				Refresh data
			</Button>
			{error && <h5>Error: {error.message}</h5>}
			{isLoading ? (
				<CircularProgress />
			) : (
				<div className='my-5 mx-auto p-5'>
					{articles.map(article => (
						<ul
							key={article.id}
							className='flex items-center justify-between m-auto'
						>
							<li className='text-xl m-2'>
								<span className=' mx-2'>id: </span>
								{article.id}
							</li>
							<li className='text-xl m-2 flex-1'>
								<span className=' mx-2'>name: </span>
								{article.name}
							</li>
							<li className='text-xl m-2'>
								<span className=' mx-2'>genre: </span>
								{article.genre}
							</li>
							<li className='text-xl m-2'>
								<span className=' mx-2'>releaseDates: </span>
								{article.releaseDates.Europe}
							</li>
						</ul>
					))}
				</div>
			)}
		</>
	)
}
