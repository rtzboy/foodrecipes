import { AnimatePresence, motion } from 'framer-motion';
import { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedOutlet from '../components/AnimatedOutlet';
import Navbar from '../components/Navbar';
import { FoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { INITIAL_FOOD_RECIPES, recipesReducer } from '../lib/reducers/recipesReducer';

const Root = () => {
	const [foodRecipes, dispatchRecipes] = useReducer(recipesReducer, INITIAL_FOOD_RECIPES);
	const location = useLocation();

	return (
		<div className='relative'>
			<Navbar />
			<FoodRecipeContext.Provider value={{ foodRecipes, dispatchRecipes }}>
				<AnimatePresence mode='popLayout'>
					<motion.div
						key={location.pathname}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
						exit={{ opacity: 0, transition: { duration: 0.4 } }}
					>
						<AnimatedOutlet />
					</motion.div>
				</AnimatePresence>
			</FoodRecipeContext.Provider>
		</div>
	);
};

export default Root;
