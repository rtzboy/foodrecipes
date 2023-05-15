import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import BlogDetails from './components/blog/BlogDetails';
import Errorpage from './components/Errorpage';
import Blogs from './routes/Blogs';
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
				index: true,
				element: <App />
			},
			{
				path: 'recipes',
				element: <Recipes />
			},
			{
				path: 'articles',
				element: <Blogs />
			},
			{
				path: 'articles/:id',
				element: <BlogDetails />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={router} />
);
