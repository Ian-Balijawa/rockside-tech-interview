import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlice'
import calculatedFieldReducer from './slices/calculatedFieldSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		calculatedField: calculatedFieldReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
