import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { InitialRecipeContext } from '../lib/contexts/InitialRecipeContext';
import { InitialRecipe, RecipeType } from '../types/recipeTypes';

const Root = () => {
	const [randomRecipe, setRandomRecipe] = useState<InitialRecipe>();
	const [foodRecipes, setFoodRecipes] = useState<RecipeType>();

	return (
		<div className='mx-auto flex min-h-screen max-w-7xl flex-col'>
			<Navbar />
			<InitialRecipeContext.Provider value={{ randomRecipe, setRandomRecipe }}>
				<FoodRecipeContext.Provider value={{ foodRecipes, setFoodRecipes }}>
					<Outlet />
				</FoodRecipeContext.Provider>
			</InitialRecipeContext.Provider>
			<Footer />
		</div>
	);
};

export default Root;
