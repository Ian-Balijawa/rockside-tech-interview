import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import type { Level } from '../../types'
import { RootState } from '../store'

interface SurveyStateValue {
	englishLevel: Level | null
	technicalAnalysis: Level | null
	workableWith: Level | null
}

export interface SurveyState {
	value: SurveyStateValue
	status: 'idle' | 'loading' | 'failed'
}

const initialState: SurveyState = {
	value: {
		englishLevel: null,
		technicalAnalysis: null,
		workableWith: null,
	},
	status: 'idle',
}

export const surveySlice = createSlice({
	name: 'Survey',
	initialState,
	reducers: {
		setEnglishLevel: (state, action: PayloadAction<Level>) => {
			state.value.englishLevel = action.payload
		},
		setTechnicalAnalysis: (state, action: PayloadAction<Level>) => {
			state.value.technicalAnalysis = action.payload
		},
		setWorkableWith: (state, action: PayloadAction<Level>) => {
			state.value.workableWith = action.payload
		},
		submit: (state, action: PayloadAction<SurveyStateValue>) => {
			const { payload } = action
			const value = state
			alert(JSON.stringify({ value, ...payload }, null, 2))
		},
	},
})

export const { setEnglishLevel, setTechnicalAnalysis, setWorkableWith, submit } = surveySlice.actions

export const selectEnglishLevel = (state: RootState) => state.survey.value.englishLevel
export const selectTechnicalAnalysis = (state: RootState) => state.survey.value.technicalAnalysis
export const selectWorkableWith = (state: RootState) => state.survey.value.workableWith

export default surveySlice.reducer
