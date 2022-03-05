import './Profile.scss'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { toggleShowName, setName } from '../../store/profile/actions.js'
import { connect } from 'react-redux'
import { selectShowName, selectName } from '../../store/profile/selectors'
import FormProfile from '../FormProfile/index.js'

const ProfileToConnect = ({ showName, name, changeShowName, changeName }) => {
	function setShowName() {
		changeShowName()
	}

	function setNewName(value) {
		changeName(value)
	}

	return (
		<div className='profile'>
			<div className='profile__user'>
				{showName && (
					<div className='profile__name'>
						<h1 className='text-center text-3xl font-bold'>Profile page</h1>
						<p className='text-center text-lg p-10'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Voluptatum, nostrum.
						</p>
						<span>My name is {name}</span>
					</div>
				)}
				<FormControlLabel
					control={<Checkbox />}
					onChange={setShowName}
					label='Show name'
				/>
				<FormProfile
					onSubmitCallback={setNewName}
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
