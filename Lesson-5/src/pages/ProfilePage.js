import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Form } from '../components/Form'
import { changeShowName, CHANGE_NAME } from '../store/profile/actions'
// import { store } from '../store'
import { Context } from '../utils/Context'

export const ProfilePage = () => {
	const { setMessageColor } = useContext(Context)
	// const storeState = store.getState() так делать не нужно!!! писать напряму Store в компоненте
	// console.log('store', storeState)
	const dispatch = useDispatch()
	const { showName, name } = useSelector(state => state)
	const [newName, setNewName] = useState('')
	const [checked, setChecked] = useState(true)

	const handleChange = () => {
		setChecked(!checked)
	}

	const handleChangeShowName = () => {
		dispatch(changeShowName)
	}

	const handleClick = () => {
		setMessageColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'))
	}

	const handleChangeName = text => {
		dispatch({
			type: CHANGE_NAME,
			payload: text,
		})
	}

	const handleChangeNewName = e => {
		setNewName(e.target.value)
	}

	return (
		<>
			<h1 className='text-center text-3xl font-bold'>Profile page</h1>
			<p className='text-center text-lg p-10'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
				nostrum.
			</p>
			<button
				className='flex justify-center m-auto p-2 border rounded-md border-b-violet-300 mb-5'
				onClick={handleClick}
			>
				Change theme
			</button>

			<fieldset className='flex m-auto justify-center'>
				<label className='inline-flex items-center mt-3'>
					<input
						onChange={(handleChange, handleChangeShowName)}
						value={showName}
						type='checkbox'
						className='form-checkbox h-5 w-5 text-gray-600'
					/>
					<span className='ml-2 text-gray-700'>show changed name</span>
				</label>
			</fieldset>
			{showName && (
				<h4 className=' text-center block p-10 text-xl'>
					<h3>my change name is: {name}</h3>
					{checked.toString()} checked?
				</h4>
			)}
			<div className='flex justify-center m-auto items-center'>
				<span className='text-center flex'>Change your name</span>
				<Form
					onSubmit={handleChangeName}
					value={newName}
					onChange={handleChangeNewName}
				/>
			</div>
		</>
	)
}
