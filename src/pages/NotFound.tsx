import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
	const navigate = useNavigate()

	useEffect(() => {
		document.title = 'Not Found'
		setTimeout(() => {
			navigate('/')
		}, 3000)
	}, [])

	return <h1 style={{ textAlign: 'center' }}>Not Found</h1>
}

export default NotFound
