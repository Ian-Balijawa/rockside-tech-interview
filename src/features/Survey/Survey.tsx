import * as React from 'react'

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'

export default function Survey() {
	const [selectedValue, setSelectedValue] = useState('excellent')
	const [value, setValue] = React.useState('female')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value)
		setSelectedValue(event.target.value)
	}

	return (
		<Table sx={tableStyles} size="small" aria-label="a dense table">
			<TableHead>
				<TableRow>
					{labels.map(label => (
						<TableCell key={label} align="right" sx={{ fontWeight: '700', ...cellStyles }}>
							{label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>

			<TableBody>
				{rows.map(row => (
					<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
						<TableCell component="th" scope="row" sx={cellStyles}>
							{row.name}
						</TableCell>

						{labels.map((label, index) => {
							if (index === 0) return null
							return (
								<TableCell key={label} align="right" sx={cellStyles}>
									<Radio checked={selectedValue === label} onChange={handleChange} value={label} name="radio-button-demo" inputProps={{ 'aria-label': label }} />
								</TableCell>
							)
						})}
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

const labels = ['', 'Excellent', 'Good', 'Average', 'Poor', 'Terrible']
const rows = [
	{
		name: 'English Level',
		excellent: false,
		good: true,
		average: true,
		poor: true,
		terrible: false,
	},
	{
		name: 'Technical Analysis',
		excellent: false,
		good: false,
		average: false,
		poor: false,
		terrible: false,
	},
	{
		name: 'Workable With',
		excellent: false,
		good: false,
		average: false,
		poor: false,
		terrible: false,
	},
]

const tableStyles = {
	border: '1px solid #eee',
}

const cellStyles = {
	alignItems: 'center',
	paddingLeft: '1em',
	marginLeft: '1em',
	alignself: 'center',
}

function ControlledRadioButtonsGroup() {
	const [value, setValue] = React.useState('female')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value)
	}

	return (
		<FormControl>
			<FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
			<RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
				<FormControlLabel value="female" control={<Radio />} label="Female" />
				<FormControlLabel value="male" control={<Radio />} label="Male" />
			</RadioGroup>
		</FormControl>
	)
}
