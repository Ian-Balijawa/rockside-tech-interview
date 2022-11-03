import React, { useState } from 'react'

import Box from '@mui/material/Box'
import { Button } from '../../components/Button'
import Container from '@mui/material/Container'
import { Input } from '../../components/Input'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'

export default function CalculatedFieldUseState() {
	const [numSheep, setNumberOfSheep] = useState<number>(0)
	const [numGoats, setNumberOfGoats] = useState<number>(0)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const values = {
			numSheep: data.get('numSheep'),
			numGoats: data.get('numGoats'),
			total: data.get('total'),
			tenXTotal: data.get('tenXTotal'),
		}
		console.log(values)
		console.log({
			numSheep: data.get('numSheep'),
			numGoats: data.get('numGoats'),
			total: data.get('total'),
			tenXTotal: data.get('tenXTotal'),
		})

		alert(JSON.stringify(values, null, 2))
	}

	const total = (sheep: number, goats: number) => sheep + goats

	const tenX = (total: number) => total * 10

	const toNumber = (value: string) => Number(value) || 0

	return (
		<Container component="main" maxWidth="xs">
			<Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
				Calculated Fields
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
				<Input
					type="text"
					name="numSheep"
					value={numSheep}
					label="Number of Sheep"
					onChange={e => {
						setNumberOfSheep(toNumber(e.target.value))
					}}
				/>
				<Input
					type="text"
					name="numGoats"
					value={numGoats}
					label="Number of Goats"
					onChange={e => {
						setNumberOfGoats(toNumber(e.target.value))
					}}
				/>

				<Input type="text" name="total" label="total" value={total(numGoats, numSheep)} />
				<Input type="text" name="tenXTotal" value={tenX(total(numSheep, numGoats))} label="10 Times Total" />

				<Button text="Submit" type="submit" variant="outlined" style={{ margin: '1em auto' }} />
			</Box>
		</Container>
	)
}
