/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Form } from '../Form'

describe('Form tests', () => {
	it('matches snapshot', () => {
		const result = render(<Form onSubmit={() => {}} />)

		expect(result).toMatchSnapshot()
	})
	it('calls onSubmit when btn clicked', () => {
		const handleSubmit = jest.fn()
		render(<Form onSubmit={handleSubmit} />)

		const btn = screen.getByRole('button')
		fireEvent(
			btn,
			new MouseEvent('click', {
				bubbles: true,
				cancelable: true,
			}),
		)
		expect(handleSubmit).toHaveBeenCalledTimes(1)
		expect(handleSubmit).toHaveBeenCalledWith('')
	})
})
