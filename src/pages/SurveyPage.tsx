import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { Fragment } from 'react'
import Survey from '../features/Survey/Survey'

function SurveyContainer() {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm" sx={styles}>
				<Survey />
			</Container>
		</Fragment>
	)
}

const styles = {
	margin: '5em auto',
	padding: '1em',
	dispay: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	hieght: '100vh',
}

export { SurveyContainer as SurveyPage }
