import { Box, Container, Typography } from '@mui/material'
import { calculateTotal, selectGoatCount, selectSheepCount, selectTotal, setNumberOfGoats, setNumberOfSheep, submit } from '../../app/slices/calculated-field-slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export default function CalculatedFieldRedux() {
	const sheepCount = useAppSelector(selectSheepCount)
	const goatCount = useAppSelector(selectGoatCount)
	const total = useAppSelector(selectTotal)
	const dispatch = useAppDispatch()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const values = {
			numSheep: data.get('numSheep'),
			numGoats: data.get('numGoats'),
			total: data.get('total'),
			tenXTotal: data.get('tenXTotal'),
		}
		//@ts-ignore
		dispatch(submit(values))
	}

	const tenX = (total: number) => total * 10
	const toNumber = (value: string) => Number(value) || 0

	return (
		<Container component="main" maxWidth="xs">
			<Typography variant="h5" sx={{ textAlign: 'center' }}>
				Calculated Fields With Redux
			</Typography>

			<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<Input
					type="number"
					name={'numSheep'}
					id="sheep"
					value={sheepCount}
					onChange={e => {
						dispatch(setNumberOfSheep(toNumber(e.target.value)))
						dispatch(calculateTotal())
					}}
					label="Number of Sheep"
				/>
				<Input
					type="number"
					name={'numGoats'}
					value={goatCount}
					onChange={e => {
						dispatch(setNumberOfGoats(toNumber(e.target.value)))
						dispatch(calculateTotal())
					}}
					label="Number of Goats"
				/>

				<Input type="number" name={'total'} value={total} label="Total Animals" />
				<Input type="number" name={'tenXTotal'} value={tenX(total)} label="Ten times total animals" />

				<Button text="Submit" type="submit" variant="outlined" style={{ margin: '1em auto' }} />
			</Box>
		</Container>
	)
}
