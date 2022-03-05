import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'

export const Profile = ({ onSubmitCallback, placeholder, submitText }) => {
	const [value, setValue] = useState('')

	function submitHandler(e) {
		e.preventDefault()
		onSubmitCallback(value)
		setValue('')
	}

	function inputChangeHandler(e) {
		setValue(e.target.value)
	}

	return (
		<div className='form' onSubmit={submitHandler}>
			<form>
				<TextField
					id='outlined-basic'
					variant='outlined'
					className='form__input'
					label={placeholder}
					value={value}
					onChange={inputChangeHandler}
					autoFocus
					color={'primary'}
				/>
				<Button className='form__submit' variant='contained' type='submit'>
					{submitText}
				</Button>
			</form>
		</div>
	)
}

export default Profile
