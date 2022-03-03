import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import './scss/Message.scss'
import { Context } from '../../utils/Context'

export const Message = ({ text, author }) => {
	const { messageColor } = useContext(Context)
	console.log('globalContext', messageColor)

	return (
		<div>
			<span style={{ color: messageColor }}>
				{author}: {text}
			</span>
		</div>
	)
}

Message.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
}
