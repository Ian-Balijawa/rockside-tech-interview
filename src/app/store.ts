import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import calculatedFieldReducer from './slices/calculated-field-slice'
import surveyReducer from './slices/survey-slice'

export const store = configureStore({
	reducer: {
		calculatedField: calculatedFieldReducer,
		survey: surveyReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
