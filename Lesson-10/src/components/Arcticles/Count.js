import React from 'react'
import { Button } from '@mui/material'
import { useState } from 'react'

export const Child1 = ({ count }) => {
	console.log('Child-11111111')
	return <h4>{count}</h4>
}
export const Child2 = ({ onClick }) => {
	console.log('Child-22222222')
	return <Button onClick={onClick}>CLICK</Button>
}
export const Child3 = React.memo(() => {
	console.log('Child-3333333')
	return <span>Subtitle</span>
})

export const Parent = () => {
	const [count, setCount] = useState(0)

	const increase = () => {
		setCount(prev => prev + 1)
	}
	return (
		<>
			<Child1 count={count} />
			<Child2 onClick={increase} />
			<Child3 />
		</>
	)
}
