import React from 'react'
import PropTypes from 'prop-types'
import './scss/Message.scss'

export const Message = ({ text, author }) => {
	return (
		<div>
			<span>
				{author}: {text}
			</span>
		</div>
	)
}

Message.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
}
