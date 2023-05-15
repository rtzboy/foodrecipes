import { Dispatch, SetStateAction } from 'react';
import { RecipeDetailsType, RecipeListInfoType } from '../../types/recipeTypes';
import RecipeRow from './RecipeRow';

type RecipeShowProps = {
	foodRecipes: RecipeListInfoType;
	setPreviewRecipe: Dispatch<SetStateAction<RecipeDetailsType | undefined>>;
};

const RecipeShow = ({ foodRecipes, setPreviewRecipe }: RecipeShowProps) => {
	if (foodRecipes.error)
		return <p className='w-full py-2 text-center text-xl italic text-red'>{foodRecipes.error}</p>;

	if (foodRecipes.recipeList?.count === 0)
		return (
			<p className='text-orange-500 w-full py-2 text-center text-xl italic'>Recipe not found!</p>
		);

	return (
		<ul className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center gap-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-3 md:gap-6'>
			{foodRecipes.recipeList?.recipe.map(recipe => (
				<RecipeRow
					key={recipe.id}
					recipe={recipe}
					setPreviewRecipe={setPreviewRecipe}
					notFound={foodRecipes.recipeList?.count}
				/>
			))}
		</ul>
	);
};

export default RecipeShow;
