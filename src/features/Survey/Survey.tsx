import { Box, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, Typography } from '@mui/material'
import { ChangeEvent, FormEvent, Fragment, useState } from 'react'
import { Level, QUANTITIES, VARIABLES, labels } from '../../types'
import {
	selectEnglishLevel,
	selectTechnicalAnalysis,
	selectWorkableWith,
	setEnglishLevel,
	setTechnicalAnalysis,
	setWorkableWith,
	submit,
} from '../../app/slices/survey-slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { Button } from '../../components/Button'

export default function Survey() {
	const englishLevel = useAppSelector(selectEnglishLevel)
	const workableWith = useAppSelector(selectWorkableWith)
	const technicalAnalysis = useAppSelector(selectTechnicalAnalysis)
	const dispatch = useAppDispatch()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const values = {
			englishLevel: data.get('englishLevel'),
			workableWith: data.get('workableWith'),
			technicalAnalysis: data.get('technicalAnalysis'),
		}
		console.log('values: ', values)
		//@ts-ignore
		dispatch(submit(values))
	}

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		switch (name) {
			case QUANTITIES.ENGLISH_LEVEL:
				dispatch(setEnglishLevel(value as Level))
				break
			case QUANTITIES.WORKABLE_WITH:
				dispatch(setWorkableWith(value as Level))
				break
			case QUANTITIES.TECHNICAL_ANALYSIS:
				dispatch(setTechnicalAnalysis(value as Level))
				break
			default:
				break
		}

		console.log('name: ', name)
		console.log('value: ', value)
	}

	return (
		<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
			<Stack direction="row" sx={{ paddingLeft: '5em' }}>
				{labels.map(label => (
					<Typography key={label} align="right" sx={{ fontWeight: '700', ...cellStyles }}>
						{label}
					</Typography>
				))}
			</Stack>
			{quantities.map(quantity => (
				//@ts-ignore
				<RadioRowComponent key={quantity} quantity={quantity} name={quantity} value={quantity} />
			))}
			<Button text="Submit" type="submit" />
		</Box>
	)
}

const quantities = [QUANTITIES.ENGLISH_LEVEL, QUANTITIES.TECHNICAL_ANALYSIS, QUANTITIES.WORKABLE_WITH]

const tableStyles = {
	border: '1px solid #ccc',
}

const cellStyles = {
	alignItems: 'center',
	paddingLeft: '1em',
	marginLeft: '1em',
	alignself: 'center',
}

interface RadioRowComponentProps {
	quantity: 'English Level' | 'Technical Analysis' | 'Workable With'
	name: string
	value: Level
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const valueList = [VARIABLES.EXCELLENT, VARIABLES.GOOD, VARIABLES.AVERAGE, VARIABLES.POOR, VARIABLES.TERRIBLE]

export function RadioRowComponent({ quantity, name, value, onChange }: RadioRowComponentProps) {
	console.log({ quantity, name, value, onChange })
	return (
		<Grid container spacing={2} columns={16} sx={{ rowStyles }}>
			<Grid item xs={5} sx={{ padding: '1em' }}>
				<Stack sx={{ typoStyles }}>
					<Typography>{quantity}</Typography>
				</Stack>
			</Grid>
			<Grid item xs={11} sx={{ paddingBottom: '1em' }}>
				<FormControl sx={{ width: '100%' }}>
					<RadioGroup row aria-labelledby="demo-controlled-radio-buttons-group" name={name} value={value} onChange={onChange}>
						{valueList.map(value => (
							<FormControlLabel key={value} sx={formControlLabelStyles} value={value} control={<Radio size="small" />} label="" />
						))}
					</RadioGroup>
				</FormControl>
			</Grid>
		</Grid>
	)
}

const formControlLabelStyles = {
	margin: '0 auto',
	padding: '0',
}

const rowStyles = {
	paddingLeft: '1em',
	border: '1px solid #ccc',
	borderTop: 'none',
}
const typoStyles = {
	fontWeight: '700',
	paddingRight: '3rem',
}
