import CalculatedFieldRedux from '../features/CalculatedField/calculated-field-redux'
import CalculatedFieldUseState from '../features/CalculatedField/calculated-field-useState'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { Fragment } from 'react'

function UseStateContainer() {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm" sx={styles}>
				<CalculatedFieldUseState />
			</Container>
		</Fragment>
	)
}
function ReduxContainer() {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm" sx={styles}>
				<CalculatedFieldRedux />
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

export { UseStateContainer as CalculatedFieldUseState, ReduxContainer as CalculatedFieldRedux }
