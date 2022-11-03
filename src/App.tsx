import "./App.css"

import {CalculatedFieldRedux, CalculatedFieldUseState} from './pages/CalculatedField';

import {Counter} from "./features/Counter/Counter"
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {createBrowserRouter} from 'react-router-dom'

const AppRouter = createBrowserRouter([
	{
	  path: "/",
	  element: (
		<Home/>
	  ),
	},
	{
	  path: "counter",
	  element:<Counter/>
	},
	{
		path:"/calculated-field-usestate",
		element:<CalculatedFieldUseState/>
	},
	{
		path:"/calculated-field-redux",
		element:<CalculatedFieldRedux/>
	},
	{
		path: "*",
		element: <NotFound/>
	},
  ]);

export default AppRouter;
