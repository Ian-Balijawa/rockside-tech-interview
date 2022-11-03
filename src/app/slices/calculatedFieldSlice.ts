import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface Value {
	sheepCount: number
	goatCount: number
	total: number
}
interface SubmitPayload {
	sheepCount: number
	goatCount: number
	total: number
	tenXTotal: number
}
export interface CalculatedFieldState {
	value: Value
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CalculatedFieldState = {
	value: {
		goatCount: 0,
		sheepCount: 0,
		total: 0,
	},
	status: 'idle',
}

export const calculatedFieldSlice = createSlice({
	name: 'CalculatedField',
	initialState,
	reducers: {
		calculateTotal: state => {
			state.value.total = state.value.sheepCount + state.value.goatCount
		},
		setNumberOfSheep: (state, action: PayloadAction<number>) => {
			state.value.sheepCount = action.payload
		},
		setNumberOfGoats: (state, action: PayloadAction<number>) => {
			state.value.goatCount = action.payload
		},
		submit: (state, action: PayloadAction<SubmitPayload>) => {
			const { payload } = action
			const value = state
			alert(JSON.stringify({ value, ...payload }, null, 2))
		},
	},
})

export const { calculateTotal, submit, setNumberOfGoats, setNumberOfSheep } = calculatedFieldSlice.actions

export const selectSheepCount = (state: RootState) => state.calculatedField.value.sheepCount
export const selectGoatCount = (state: RootState) => state.calculatedField.value.goatCount
export const selectTotal = (state: RootState) => state.calculatedField.value.total

export default calculatedFieldSlice.reducer