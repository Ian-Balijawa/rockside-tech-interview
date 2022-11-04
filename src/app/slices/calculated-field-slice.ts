import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface Value {
	sheepCount: number
	goatCount: number
	total: number
}
interface FormData {
	sheepCount: FormDataEntryValue | null
	goatCount: FormDataEntryValue | null
	total: FormDataEntryValue | null
	tenXTotal: FormDataEntryValue | null
}
export interface CalculatedFieldState {
	value: Value
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CalculatedFieldState = {
	value: {
		sheepCount: 0,
		goatCount: 0,
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
		setNumberOfSheep: (state, action: PayloadAction<string>) => {
			const num = !Number.isNaN(action.payload) ? Number(action.payload) : 0
			state.value.sheepCount = num
		},
		setNumberOfGoats: (state, action: PayloadAction<string>) => {
			const num = !Number.isNaN(action.payload) ? Number(action.payload) : 0
			state.value.goatCount = num
		},
		submit: (state, action: PayloadAction<FormData>) => {
			const { payload } = action
			alert(JSON.stringify({ payload }, null, 2))
		},
	},
})

export const { calculateTotal, submit, setNumberOfGoats, setNumberOfSheep } = calculatedFieldSlice.actions

export const selectSheepCount = (state: RootState) => state.calculatedField.value.sheepCount
export const selectGoatCount = (state: RootState) => state.calculatedField.value.goatCount
export const selectTotal = (state: RootState) => state.calculatedField.value.total

export default calculatedFieldSlice.reducer
