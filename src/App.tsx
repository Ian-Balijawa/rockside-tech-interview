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
		path: 'calculated-field-usestate',
		element: <CalculatedFieldUseState />,
	},
	{
		path: 'calculated-field-redux',
		element: <CalculatedFieldRedux />,
	},
	{
		path: 'survey',
		element: <SurveyPage />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

export default AppRouter
