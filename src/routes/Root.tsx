import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedOutlet from '../components/AnimatedOutlet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { InitialRecipeContext } from '../lib/contexts/InitialRecipeContext';
import { InitialRecipe, RecipeType } from '../types/recipeTypes';

const Root = () => {
	const [randomRecipe, setRandomRecipe] = useState<InitialRecipe>();
	const [foodRecipes, setFoodRecipes] = useState<RecipeType>();
	const location = useLocation();
	console.log(location);

	return (
		<div className='mx-auto flex min-h-screen max-w-7xl flex-col'>
			<Navbar />
			<InitialRecipeContext.Provider value={{ randomRecipe, setRandomRecipe }}>
				<FoodRecipeContext.Provider value={{ foodRecipes, setFoodRecipes }}>
					<AnimatePresence mode='popLayout'>
						<motion.div
							key={location.pathname}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
							exit={{ opacity: 0, transition: { duration: 1 } }}
						>
							<AnimatedOutlet />
						</motion.div>
					</AnimatePresence>
				</FoodRecipeContext.Provider>
			</InitialRecipeContext.Provider>
			<Footer />
		</div>
	);
};

export default Root;
