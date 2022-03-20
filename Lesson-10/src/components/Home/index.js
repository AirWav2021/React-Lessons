import { Button } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { login, signUp } from '../../service/firebase'

export const Home = ({ isSignUp }) => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [error, setError] = useState('')

	const handleChangeEmail = event => {
		setEmail(event.target.value)
	}
	const handleChangePass = event => {
		setPass(event.target.value)
	}

	const handleSignUp = async () => {
		try {
			await signUp(email, pass)
		} catch (err) {
			setError(err.message)
		}
	}

	const handleSignIn = async () => {
		try {
			await login(email, pass)
		} catch (err) {
			setError(err.message)
		}
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (isSignUp) {
			handleSignUp()
		} else {
			handleSignIn()
		}

		setEmail('')
		setPass('')
	}

	return (
		<>
			<h2>{isSignUp ? 'Sign-Up' : 'Login'}</h2>
			<Link to={`${isSignUp ? '/' : '/signup'}`}>
				{!isSignUp ? 'Sign-Up' : 'Login'}
			</Link>
			<form className=' flex-col' onSubmit={handleSubmit}>
				<input
					className=' m-2'
					type='email'
					value={email}
					onChange={handleChangeEmail}
				/>
				<input
					className=' m-2'
					type='password'
					value={pass}
					onChange={handleChangePass}
				/>

				<Button onClick={handleSubmit} variant='contained'>
					LOGIN
				</Button>
				{error && <span>Неправильный логин или пароль</span>}
			</form>
		</>
	)
}
