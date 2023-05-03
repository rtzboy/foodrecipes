import { Dispatch, SetStateAction, useState } from 'react';
import { foodRecipeCall } from '../lib/api/recipe_api';
import { useFoodRecipeContext } from '../lib/contexts/FoodRecipeContext';
import { RecipeType } from '../types/recipeTypes';
import Search from './icons/Search';

type InputSearchProps = {
	className?: string;
};

const InputSearch = ({ className }: InputSearchProps) => {
	const [searchFood, setSearchFood] = useState('');
	const { setFoodRecipes } = useFoodRecipeContext();

	return (
		<div className={`flex overflow-hidden rounded-xl border border-neutral-400 ${className || ''}`}>
			<input
				type='text'
				value={searchFood}
				className='block h-full w-full px-4 py-3 outline-none'
				onChange={evt => setSearchFood(evt.target.value)}
				placeholder='Hungry?'
			/>
			<div className='relative flex w-12 items-center justify-center bg-orange-50'>
				<button
					disabled={!searchFood}
					onClick={evt => searchRecipe(setFoodRecipes, searchFood)}
					className='disabled:opacity-50'
				>
					<Search className='h-5' />
				</button>
			</div>
		</div>
	);
};

const searchRecipe = async (
	setFoodRecipes: Dispatch<SetStateAction<RecipeType | undefined>>,
	searchTerm: string
) => {
	const { message, success, filterRecipes } = await foodRecipeCall(searchTerm);
	if (success) {
		setFoodRecipes(filterRecipes);
	} else {
		console.log(message);
	}
};

export default InputSearch;
