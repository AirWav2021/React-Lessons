import { useEffect, useState, useRef } from 'react'
import { Button, TextField } from '@mui/material'
import './scss/Form.scss'

export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('')
	const messageFocus = useRef()

	const handleChange = event => {
		setValue(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		onSubmit(value)
		setValue('')
		messageFocus.current?.focus()
	}

	useEffect(() => {
		messageFocus.current?.focus()
	}, [])

	return (
		<form action='' onSubmit={handleSubmit}>
			<TextField
				className='myTxtField'
				type='text'
				value={value}
				onChange={handleChange}
				inputRef={messageFocus}
			/>
			<Button type='submit' sx={{ backgroundColor: '#61dafb' }}>
				Send
			</Button>
		</form>
	)
}
