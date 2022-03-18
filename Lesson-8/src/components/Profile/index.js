import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { toggleShowName, setName } from '../../store/profile/actions.js'
import { connect } from 'react-redux'
import { selectShowName, selectName } from '../../store/profile/selectors'
import FormProfile from '../FormProfile/index.js'
import './Profile.scss'
import {
	logout,
	profileNameRef,
	profileRef,
	profileShowNameRef,
} from '../../service/firebase.js'
import { child, onValue, set } from 'firebase/database'
import { useEffect, useState } from 'react'

const ProfileToConnect = () => {
	const [name, setName] = useState('')
	const [showName, setShowName] = useState(false)

	const handleShowName = () => {
		set(profileShowNameRef, !showName)
	}
	const handleNewName = value => {
		// changeName(value)
		set(profileNameRef, value)
	}

	useEffect(() => {
		const unsubscribeProfileName = onValue(profileNameRef, snapshot => {
			// console.log(snapshot)
			setName(snapshot.val())
		})
		const unsubscribeProfileShowName = onValue(profileShowNameRef, snapshot => {
			// console.log(snapshot)
			setShowName(snapshot.val())
		})
		const unsubscribeProfile = onValue(profileRef, snapshot => {
			console.log(
				snapshot.forEach(child => {
					console.log(child.key, child.val())
				}),
			)
		})

		return () => {
			unsubscribeProfileName()
			unsubscribeProfileShowName()
			unsubscribeProfile()
		}
	}, [])

	const handleLogout = async () => {
		try {
			await logout()
		} catch (err) {
			console.warn(err)
		}
	}

	return (
		<div className='profile'>
			<div className='profile__user'>
				<button onClick={handleLogout}>LOGOUT</button>
				<h1 className='text-center text-3xl font-bold'>Profile page</h1>
				<p className='text-center text-lg p-10'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
					nostrum.
				</p>
				{showName && (
					<div className='profile__name'>
						<span>My name is {name}</span>
					</div>
				)}
				<FormControlLabel
					control={<Checkbox />}
					onChange={handleShowName}
					label='Show name'
				/>
				<FormProfile
					onSubmitCallback={handleNewName}
					placeholder='Input new name'
					submitText='Set'
				/>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	showName: selectShowName(state),
	name: selectName(state),
})

const mapDispatchToProps = {
	changeShowName: () => toggleShowName,
	changeName: setName,
}

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileToConnect)
export default Profile
