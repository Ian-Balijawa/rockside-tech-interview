import { calculateTotal, selectGoatCount, selectSheepCount, selectTotal, setNumberOfGoats, setNumberOfSheep, submit } from '../../app/slices/calculatedFieldSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

import { Button } from '../../components/Button'
import { Fragment } from 'react'
import { Input } from '../../components/Input'
import { Typography } from '@mui/material'

export default function CalculatedFieldRedux() {
	const sheepCount = useAppSelector(selectSheepCount)
	const goatCount = useAppSelector(selectGoatCount)
	const total = useAppSelector(selectTotal)
	const dispatch = useAppDispatch()

	console.log('sheepCount', sheepCount)
	console.log('goatCount', goatCount)
	console.log('total', total)

	const tenX = (total: number | string) => (Number.isNaN(total) ? Number(total) * 10 : 0)
	const toNumber = (value: string) => Number(value) || 0

	return (
		<Fragment>
			<Typography variant="h5" sx={{ textAlign: 'center' }}>
				Calculated Fields
			</Typography>

			<Input
				type="number"
				name={''}
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
				name={''}
				value={goatCount}
				onChange={e => {
					dispatch(setNumberOfGoats(toNumber(e.target.value)))
					dispatch(calculateTotal())
				}}
				label="Number of Goats"
			/>

			<Input type="number" name={''} value={total} label="total" />
			<Input type="number" name={''} value={tenX(total)} label="10 Times Total" />

			<Button text="Submit" type="submit" variant="outlined" style={{ margin: '1em auto' }} onSubmit={() => dispatch(submit({ sheepCount, goatCount, total, tenXTotal: tenX(total) }))} />
		</Fragment>
	)
}
