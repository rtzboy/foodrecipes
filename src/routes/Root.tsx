import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { InitialRecipeContext } from '../lib/contexts/InitialRecipeContext';
import { InitialRecipe } from '../types/recipeTypes';

const Root = () => {
	const [randomRecipe, setRandomRecipe] = useState<InitialRecipe>();

	return (
		<div className='mx-auto flex min-h-screen max-w-7xl flex-col'>
			<Navbar />
			<InitialRecipeContext.Provider value={{ randomRecipe, setRandomRecipe }}>
				<Outlet />
			</InitialRecipeContext.Provider>
			<Footer />
		</div>
	);
};

export default Root;
