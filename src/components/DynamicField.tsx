import { TextFieldProps as Props, TextField } from '@mui/material'

import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { ChangeEventHandler } from 'react'
import { calculateTotal } from '../app/slices/calculated-field-slice'
import { toCamelCase } from '../helpers/camel-case'
import { useAppDispatch } from '../app/hooks'

type PropType = {
	label: string
	styles?: any
	action: ActionCreatorWithPayload<string, string>
	onChange?: ChangeEventHandler<HTMLInputElement>
} & Props

export const DynamicField = (props: PropType) => {
	const dispatch = useAppDispatch()

	const { label, action, value, styles, ...restProps } = props
	return (
		<TextField
			variant="outlined"
			label={label}
			size="small"
			sx={{ width: '100%', margin: '1em auto', ...styles }}
			{...restProps}
			type="text"
			name={toCamelCase(label)}
			value={value}
			onChange={e => {
				dispatch(action(e.target.value))
				dispatch(calculateTotal())
			}}
		/>
	)
}
