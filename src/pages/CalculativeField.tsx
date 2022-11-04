import { Fragment, useEffect } from 'react'

import CalculativeField from '../features/CalculatedField/calculated-field'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

export default function CalculativeFieldContainer() {
	useEffect(() => {
		document.title = 'Calculative Field'
	}, [])

	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm" sx={styles}>
				<CalculativeField />
			</Container>
		</Fragment>
	)
}

const styles = {
	margin: '5em auto',
	padding: '1em',
	border: '1px solid #ccc',
	borderRadius: '10px',
}
