import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function NotFound() {
	useEffect(() => {
		document.title = 'Not Found'
	}, [])

	return (
		<>
			<h1>Not Found</h1>
			<Link to="/">GO HOME</Link>
		</>
	)
}

export default NotFound
