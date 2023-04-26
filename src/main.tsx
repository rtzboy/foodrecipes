import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Categories from './components/Categories';
import Errorpage from './components/Errorpage';
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
				element: <div>Recipes</div>
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
