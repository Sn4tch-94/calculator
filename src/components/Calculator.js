import React, { useState } from 'react'
import './Calculator.css'

import { buttons, BUTTON_ACTIONS } from '../config/buttons'

function Calculator() {

	const [expression, setExpression] = useState('')

	const buttonClick = (item) => {
		if (item.action == BUTTON_ACTIONS.ADD) {
			if (expression == 'Syntax error')
				setExpression('')
			else if (item.display == 'x')
				setExpression(expression + '*')
			else
				setExpression(expression + item.display)
		}

		if (item.action == BUTTON_ACTIONS.DELETE) {
			setExpression('')
		}

		if (item.action == BUTTON_ACTIONS.CALC) {
			// If there is no expression
			if (expression.trim() <= 0) {
				console.log('trim')
				return
			}

			// Compute expression
			try {
				let res = eval(expression)

				setExpression(res.toString())
				
			} catch (error) {
				setExpression('Syntax error')
				console.log(error)
			}
		}
	}

	return (
		<div className="calculator__container">
			<div className="calculator__results">
				{expression}
			</div>
			<div className="calculator__buttons">
				{
					buttons.map((item, index) => (
						<button
							key={index}
							onClick={() => buttonClick(item)}
						>
							{item.display}
						</button>
					))
				}
			</div>
			
		</div>
	)
}

export default Calculator
