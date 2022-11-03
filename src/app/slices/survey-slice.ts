import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootState } from '../store'

interface Measurements {
	excellent: boolean
	good: boolean
	average: boolean
	poor: boolean
	terrible: boolean
}

interface SurveyStateValue {
	englishLevel: Measurements
	technicalAnalysis: Measurements
	workableWith: Measurements
}

export interface SurveyState {
	value: SurveyStateValue
	status: 'idle' | 'loading' | 'failed'
}

const initialState: SurveyState = {
	value: {
		englishLevel: {
			excellent: false,
			good: false,
			average: false,
			poor: false,
			terrible: false,
		},
		technicalAnalysis: {
			excellent: false,
			good: false,
			average: false,
			poor: false,
			terrible: false,
		},
		workableWith: {
			excellent: false,
			good: false,
			average: false,
			poor: false,
			terrible: false,
		},
	},
	status: 'idle',
}

export const surveySlice = createSlice({
	name: 'Survey',
	initialState,
	reducers: {
		setEnglishLevel: (state, action: PayloadAction<Measurements>) => {
			state.value.englishLevel = action.payload
		},
		setTechnicalAnalysis: (state, action: PayloadAction<Measurements>) => {
			state.value.technicalAnalysis = action.payload
		},
		setWorkableWith: (state, action: PayloadAction<Measurements>) => {
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
