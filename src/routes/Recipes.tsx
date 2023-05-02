import { Dispatch, SetStateAction, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InputSearch from '../components/InputSearch';
import { foodRecipeCall, nextRecipeCall } from '../lib/api/recipe_api';
import { useFoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { RecipeType } from '../types/recipeTypes';

const Recipes = () => {
	const { foodRecipes, setFoodRecipes } = useFoodRecipeContext();
	const { idRecipe } = useParams();

	useEffect(() => {
		if (!idRecipe) return;
		recipeCall(setFoodRecipes, idRecipe);
	}, [idRecipe]);

	return (
		<div className='pt-[80px]'>
			<div className='mx-auto max-w-7xl p-3 sm:p-6'>
				<InputSearch className='mb-6 w-full sm:max-w-xs' />
				<div className='mb-6'>
					<ul className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-items-center gap-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-3 md:gap-6'>
						{foodRecipes?.recipe.map(recipe => (
							<li key={recipe.id} className='mb-2 overflow-hidden border-neutral-500'>
								<img
									src={recipe.images.large?.url || recipe.images.regular?.url}
									alt=''
									className='mb-3 w-[300px] rounded-2xl object-contain'
								/>
								<div className='max-w-[300px] font-roboto'>{recipe.label}</div>
								<div className='font-salsa text-sm italic text-gray-500'>{recipe.source}</div>
							</li>
						))}
					</ul>
				</div>
				<div className='text-center'>
					<button
						disabled={!foodRecipes?.next}
						onClick={() => {
							nextPageRecipe(setFoodRecipes, foodRecipes?.next);
							window.scrollTo({
								top: 0,
								behavior: 'smooth'
							});
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
