import React, { useState, useEffect, useRef } from 'react'
import './Calculator.css'

import { buttons, BUTTON_ACTIONS } from '../config/buttons'

function Calculator() {

	const buttonsRef = useRef(null);

	const [expression, setExpression] = useState('')
	const [history, setHistory] = useState('')

	useEffect(() => {
		// Adapt buttons height for mobile usage
		const buttons = Array.from(buttonsRef.current.querySelectorAll('button'));
		buttons.forEach(e => e.style.height = e.offsetWidth + 'px');
	}, []);

	const buttonClick = (item) => {
		// Add button display to expression
		if (item.action === BUTTON_ACTIONS.ADD) {
			if (expression.length >= 10)
				return
			if (expression === 'Syntax error')
				setExpression('')
			else if (item.display === 'x')
				setExpression(expression + '*')
			else
				setExpression(expression + item.display)
		}

		// Delete expression
		if (item.action === BUTTON_ACTIONS.DELETE) {
			setExpression(history)
			setHistory('')
		}

		// Switch dark mode
		if (item.action === BUTTON_ACTIONS.THEME) {
			document.body.classList.toggle('dark')
		}

		// Compute expression
		if (item.action === BUTTON_ACTIONS.CALC) {
			// If there is no expression
			if (expression.trim() <= 0) {
				console.log('trim')
				return
			}

			// Try to compute expression
			try {
				let res = Number(eval(expression).toPrecision(10))

				setHistory(expression)
				setExpression(res.toString())

				// Easter egg 🥚
				if (res === 42)
					console.log('%c ', 'font-size:2000px; background:url(https://pbs.twimg.com/media/EVykyJxXQAELuta.jpg) no-repeat;');
				
			} catch (error) {
				setExpression('Syntax error')
				console.log(error)
			}
		}
	}

	return (
		<div className="calculator__container">
			<div className="calculator__results__container">
				<div className="calculator__result__history">
					{history}
				</div>
				<div className="calculator__result">
					{expression}
				</div>
			</div>
			<div ref={buttonsRef} className="calculator__buttons">
				{
					buttons.map((item, index) => (
						<button
							className={item.class}
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
