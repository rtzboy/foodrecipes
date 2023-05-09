import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { RecipeDetailsType, RecipeListInfoType } from '../../types/recipeTypes';
import RecipeRow from './RecipeRow';

type RecipeShowProps = {
	foodRecipes: RecipeListInfoType;
	setPreviewRecipe: Dispatch<SetStateAction<RecipeDetailsType | undefined>>;
};

const variantsUl = {
	hidden: {
		transition: {
			when: 'afterChildren'
		}
	},
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
};

const RecipeShow = ({ foodRecipes, setPreviewRecipe }: RecipeShowProps) => {
	if (foodRecipes.error)
		return (
			<p className='w-full py-2 text-center text-xl italic text-red-500'>{foodRecipes.error}</p>
		);

	if (foodRecipes.recipeList?.count === 0)
		return (
			<p className='w-full py-2 text-center text-xl italic text-orange-500'>Recipe not found!</p>
		);

	return (
		<motion.ul
			initial='hidden'
			animate='visible'
			variants={variantsUl}
			className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-items-center gap-2 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-3 md:gap-6'
		>
			{foodRecipes.recipeList?.recipe.map(recipe => (
				<RecipeRow
					key={recipe.id}
					recipe={recipe}
					setPreviewRecipe={setPreviewRecipe}
					notFound={foodRecipes.recipeList?.count}
				/>
			))}
		</motion.ul>
	);
};

export default RecipeShow;
