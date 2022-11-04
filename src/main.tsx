import AppRouter from './App'
import NavBar from './components/AppBar'
import { Provider } from 'react-redux'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { store } from './app/store'

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<NavBar />
			<RouterProvider router={AppRouter} />
		</Provider>
	</React.StrictMode>
)
