import { useEffect } from 'react'

function Home() {
	useEffect(() => {
		document.title = 'Home'
	}, [])

	return <h1 style={{ textAlign: 'center' }}>RockSide</h1>
}

export default Home
