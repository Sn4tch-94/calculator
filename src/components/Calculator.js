import React, { useState } from 'react'
import './Calculator.css'

import { buttons } from '../config/buttons'

function Calculator() {

	const [expression, setExpression] = useState('')

	const buttonClick = (item) => {
		setExpression(expression + item.display)
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
