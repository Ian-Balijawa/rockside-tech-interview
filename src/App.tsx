import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CalculativeFieldContainer from './pages/CalculativeField'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { SurveyPage } from './pages/SurveyPage'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/survey" element={<SurveyPage />} />
				<Route path="/calculative-field" element={<CalculativeFieldContainer />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}
