import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Errorpage from './components/Errorpage';
import Categories from './routes/Categories';
import Recipes from './routes/Recipes';
import Root from './routes/Root';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Errorpage />,
		children: [
			{
				path: 'categories',
				element: <Categories />,
				children: [
					{
						path: ':idCateg',
						element: <div>...</div>
					}
				]
			},
			{
				path: 'recipes',
				element: <Recipes />,
				children: [
					{
						path: ':idRecipe',
						element: <div>...</div>
					}
				]
			},
			{
				index: true,
				element: <App />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
