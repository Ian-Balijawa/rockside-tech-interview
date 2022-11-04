import { Box, Container, Typography } from '@mui/material'
import {
	calculateTotal,
	selectGoatCount,
	selectSheepCount,
	selectTotal,
	setNumberOfGoats,
	setNumberOfSheep,
	submit,
} from '../../app/slices/calculated-field-slice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { Button } from '../../components/Button'
import { DynamicField } from '../../components/DynamicField'
import { Input } from '../../components/Input'

export default function CalculativeField() {
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

	return (
		<Container component="main" maxWidth="xs">
			<Typography variant="h5" sx={{ textAlign: 'center' }}>
				Calculative Fields
			</Typography>

			<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
				<DynamicField type="text" label="Number of Sheep" value={sheepCount <= 0 ? '' : sheepCount} action={setNumberOfSheep} />
				<Input
					type="text"
					name={'numSheep'}
					id="sheep"
					value={sheepCount === 0 ? '' : sheepCount}
					onChange={e => {
						dispatch(setNumberOfSheep(e.target.value))
						dispatch(calculateTotal())
					}}
					label="Number of Sheep"
				/>
				<Input
					type="text"
					name={'numGoats'}
					value={goatCount === 0 ? '' : goatCount}
					onChange={e => {
						dispatch(setNumberOfGoats(e.target.value))
						dispatch(calculateTotal())
					}}
					label="Number of Goats"
				/>

				<Input type="text" name={'total'} value={total === 0 ? '' : total} label="Total Animals" />
				<Input type="text" name={'tenXTotal'} value={typeof total !== 'string' ? tenX(total) : ''} label="Ten times total animals" />

				<Button text="Submit" type="submit" variant="outlined" style={{ margin: '1em auto' }} />
			</Box>
		</Container>
	)
}
