import { useState } from 'react';
import { foodRecipeCall } from '../lib/api/recipe_api';
import { useFoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { RecipeReducerAction } from '../types/recipeTypes';
import Search from './icons/Search';

type InputSearchProps = {
	className?: string;
};

const InputSearch = ({ className }: InputSearchProps) => {
	const [searchFood, setSearchFood] = useState('');
	const { dispatchRecipes } = useFoodRecipeContext();

	return (
		<div
			className={`flex overflow-hidden rounded-xl border border-slate-gray bg-white ${
				className || ''
			}`}
		>
			<input
				type='text'
				value={searchFood}
				className='block h-full w-full px-4 py-3 outline-none'
				onChange={evt => setSearchFood(evt.target.value)}
				placeholder='Hungry?'
				onKeyUp={evt => {
					if (searchFood && evt.key === 'Enter') {
						searchRecipe(dispatchRecipes, searchFood);
					}
				}}
			/>
			<div className='relative flex w-12 items-center justify-center'>
				<button
					disabled={!searchFood}
					onClick={() => searchRecipe(dispatchRecipes, searchFood)}
					className='flex h-full w-full items-center justify-center bg-light-orange disabled:opacity-50'
				>
					<Search className='h-5' />
				</button>
			</div>
		</div>
	);
};

const searchRecipe = async (
	dispatchRecipes: React.Dispatch<RecipeReducerAction>,
	searchTerm: string
) => {
	dispatchRecipes({ type: 'RECIPE_SEARCHING' });
	const { message, success, filterRecipes } = await foodRecipeCall(searchTerm);
	if (success) return dispatchRecipes({ type: 'RECIPE_FOUND', payload: filterRecipes });
	dispatchRecipes({ type: 'RECIPE_ERROR', payload: message });
};

export default InputSearch;
