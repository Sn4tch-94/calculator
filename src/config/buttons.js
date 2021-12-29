export const BUTTON_ACTIONS = {
	ADD: 'ADD',
	CALC: 'CALC',
	DELETE: 'DELETE',
}

export const buttons = [
	{
		display: 'C',
		action: BUTTON_ACTIONS.DELETE,
		class: 'button__operator'
	},
	{
		display: '(',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: ')',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: '/',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: '7',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '8',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '9',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: 'x',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: '4',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '5',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '6',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '-',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: '1',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '2',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '3',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '+',
		action: BUTTON_ACTIONS.ADD,
		class: 'button__operator'
	},
	{
		display: '0',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '.',
		action: BUTTON_ACTIONS.ADD,
		class: ''
	},
	{
		display: '=',
		action: BUTTON_ACTIONS.CALC,
		class: ''
	}
]