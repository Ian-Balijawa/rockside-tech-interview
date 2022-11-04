import { CalculatedFieldRedux, CalculatedFieldUseState } from './pages/CalculatedField'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { SurveyPage } from './pages/SurveyPage'
import { createBrowserRouter } from 'react-router-dom'

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/calculative-field',
		element: <CalculatedFieldRedux />,
	},
	{
		path: '/survey',
		element: <SurveyPage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default AppRouter
