import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DynamicBg from '../components/DynamicBg';
import InputSearch from '../components/InputSearch';
import Arrow from '../components/icons/Arrow';
import { foodRecipeCall, nextRecipeCall } from '../lib/api/recipe_api';
import { useFoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { RecipeType } from '../types/recipeTypes';

const bgList = ['/src/assets/coverone.png', '/src/assets/covertwo.png'];

const Recipes = () => {
	const { foodRecipes, setFoodRecipes } = useFoodRecipeContext();
	const { idRecipe } = useParams();

	useEffect(() => {
		if (!idRecipe) return;
		recipeCall(setFoodRecipes, idRecipe);
	}, [idRecipe]);

	return (
		<section>
			<section className='relative h-screen w-full overflow-hidden'>
				<DynamicBg bglist={bgList} opacitylvl={1} />
				<div className='absolute left-1/2 top-1/2 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 px-6'>
					<h2 className='max-w-2xl text-center text-6xl'>What are your favorite food?</h2>
					<p className='max-w-3xl text-center text-gray-600'>
						Whether you're craving a specific cuisine or looking for inspiration, our search feature
						will help you discover the perfect recipe.
					</p>
					<InputSearch className='w-full sm:max-w-md' />
					<p className='font-bold tracking-wider text-orange-600'>POPULAR SEARCH</p>
					<div>
						<ul className='flex flex-wrap justify-center gap-6 text-orange-600'>
							<li className='rounded-2xl bg-white px-3 py-1'>#RoastDuck</li>
							<li className='rounded-2xl bg-white px-3 py-1'>#Shrimp</li>
							<li className='rounded-2xl bg-white px-3 py-1'>#Dessert</li>
							<li className='rounded-2xl bg-white px-3 py-1'>#Ceviche</li>
							<li className='rounded-2xl bg-white px-3 py-1'>#Chicken</li>
						</ul>
					</div>
					{foodRecipes && (
						<button
							onClick={() => {
								window.scrollTo({
									top: 850,
									behavior: 'smooth'
								});
							}}
						>
							<motion.span
								animate={{ y: [0, 20, 0] }}
								transition={{ duration: 1.7, repeat: Infinity, repeatType: 'loop' }}
								className='block text-orange-500'
							>
								<Arrow className='h-9' />
							</motion.span>
						</button>
					)}
				</div>
			</section>
			<section className='mx-auto max-w-7xl'>
				<div className='mb-6 px-3'>
					<ul className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-3 md:gap-6'>
						<AnimatePresence>
							{foodRecipes?.recipe.map(recipe => (
								<motion.li
									layout
									key={recipe.id}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className='mb-2 overflow-hidden border-neutral-500'
								>
									<img
										src={recipe.images.large?.url || recipe.images.regular?.url}
										alt=''
										className='mb-3 w-[300px] rounded-2xl object-contain'
									/>
									<div className='max-w-[300px] font-roboto'>{recipe.label}</div>
									<div className='font-salsa text-sm italic text-gray-500'>{recipe.source}</div>
								</motion.li>
							))}
						</AnimatePresence>
					</ul>
				</div>
			</section>
			<div>
				<div className='mx-auto max-w-7xl p-3 sm:p-6'>
					<div className='text-center'>
						<button
							disabled={!foodRecipes?.next}
							onClick={() => {
								nextPageRecipe(setFoodRecipes, foodRecipes?.next);
								setTimeout(() => {
									window.scrollTo({
										top: 800,
										behavior: 'smooth'
									});
								}, 1000);
							}}
							className='rounded-xl bg-slate-200 px-4 py-1 disabled:opacity-50'
						>
							NextPage
						</button>
					</div>
					<div className='text-xs italic text-slate-500'>
						{foodRecipes?.to}/{foodRecipes?.count}
					</div>
				</div>
			</div>
		</section>
	);
};

const recipeCall = async (
	setFoodRecipes: Dispatch<SetStateAction<RecipeType | undefined>>,
	idRecipe?: string
) => {
	// TODO: change "steak" to something client needs
	const { message, success, filterRecipes } = await foodRecipeCall(idRecipe || 'steak');
	if (success) {
		setFoodRecipes(filterRecipes);
	} else {
		console.log(message);
	}
};

const nextPageRecipe = async (
	setFoodRecipes: Dispatch<SetStateAction<RecipeType | undefined>>,
	url?: string
) => {
	const { message, success, filterRecipes } = await nextRecipeCall(url || 'https');
	if (success) {
		setFoodRecipes(filterRecipes);
	} else {
		console.log(message);
	}
};

export default Recipes;
