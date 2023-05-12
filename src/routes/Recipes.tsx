import { Dispatch, useEffect, useState } from 'react';
import DynamicBg from '../components/DynamicBg';
import Footer from '../components/Footer';
import InputSearch from '../components/InputSearch';
import Modal from '../components/Modal';
import RecipeDetails from '../components/RecipeDetails';
import LatestBtn from '../components/buttons/LatestBtn';
import LoadingAnim from '../components/icons/LoadingAnim';
import NextArrow from '../components/icons/NextArrow';
import RecipeShow from '../components/recipe/RecipeShow';
import { RANDOM_TYPE } from '../constants/content';
import { latestRecipeCall, nextRecipeCall } from '../lib/api/recipe_api';
import { useFoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { RecipeDetailsType, RecipeReducerAction } from '../types/recipeTypes';

const bgList = ['/src/assets/coverone.png', '/src/assets/covertwo.png'];

const Recipes = () => {
	const { foodRecipes, dispatchRecipes } = useFoodRecipeContext();
	const [previewRecipe, setPreviewRecipe] = useState<RecipeDetailsType | undefined>(undefined);

	useEffect(() => {
		if (foodRecipes.recipeList) return;
		latestRecipes(dispatchRecipes);
	}, []);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<section>
			{previewRecipe && (
				<Modal onClose={() => setPreviewRecipe(undefined)}>
					<RecipeDetails details={previewRecipe} />
				</Modal>
			)}
			<section className='relative h-screen w-full overflow-hidden'>
				<DynamicBg bglist={bgList} opacitylvl={1} />
				<div className='absolute left-1/2 top-1/2 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 px-6'>
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
					<LatestBtn loadStatus={foodRecipes.loading} />
					<h1 className='mt-12 text-4xl'>LATEST RECIPES</h1>
				</div>
			</section>
			<section className='mx-auto max-w-7xl'>
				<div className='mb-6 px-3'>
					<RecipeShow foodRecipes={foodRecipes} setPreviewRecipe={setPreviewRecipe} />
				</div>
				<div className='flex justify-center'>
					<button
						disabled={foodRecipes.loading || !foodRecipes.recipeList?.next}
						onClick={() => nextPageRecipe(dispatchRecipes, foodRecipes.recipeList?.next)}
						className='flex h-[30px] w-[90px] items-center justify-center rounded-xl bg-orange-200 disabled:opacity-50'
					>
						{foodRecipes.loading ? (
							<span>
								<LoadingAnim className='h-5' />
							</span>
						) : (
							<span>
								<NextArrow className='h-6' />
							</span>
						)}
					</button>
				</div>
				<div className='px-4 text-xs italic text-slate-400'>
					{foodRecipes.recipeList?.to}/{foodRecipes.recipeList?.count}
				</div>
			</section>
			<Footer />
		</section>
	);
};

const latestRecipes = async (dispatchRecipes: Dispatch<RecipeReducerAction>) => {
	const { message, success, filterRecipes } = await latestRecipeCall(
		RANDOM_TYPE[Math.floor(Math.random() * (11 - 0 - 1) + 0)]
	);
	if (success) return dispatchRecipes({ type: 'RECIPE_FOUND', payload: filterRecipes });
	dispatchRecipes({ type: 'RECIPE_ERROR', payload: message });
};

const nextPageRecipe = async (dispatchRecipes: Dispatch<RecipeReducerAction>, url?: string) => {
	dispatchRecipes({ type: 'RECIPE_SEARCHING' });
	const { message, success, filterRecipes } = await nextRecipeCall(url || 'https');
	if (success) return dispatchRecipes({ type: 'RECIPE_FOUND', payload: filterRecipes });
	dispatchRecipes({ type: 'RECIPE_ERROR', payload: message });
};

export default Recipes;
