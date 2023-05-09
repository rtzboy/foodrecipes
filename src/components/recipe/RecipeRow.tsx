import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { RecipeDetailsType } from '../../types/recipeTypes';
import Maximize from '../icons/Maximize';

type RecipeRowProps = {
	recipe: RecipeDetailsType;
	setPreviewRecipe: Dispatch<SetStateAction<RecipeDetailsType | undefined>>;
	notFound?: number;
};

const variantsChild = {
	hidden: { scale: 0.5, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { type: 'spring' } }
};

const RecipeRow = ({ recipe, setPreviewRecipe, notFound }: RecipeRowProps) => {
	if (notFound === 0) return <li>Recipe not found!!</li>;

	return (
		<motion.li layout variants={variantsChild} className='relative rounded-lg p-2'>
			<div className='group relative'>
				<img
					src={recipe.images.large?.url || recipe.images.regular?.url}
					alt=''
					className='mb-3 w-[300px] rounded-2xl object-cover'
				/>
				<span className='absolute left-2 top-2 block rounded-lg bg-orange-600 px-2 py-1 text-sm text-white'>
					by {recipe.source}
				</span>
				<span
					onClick={() => setPreviewRecipe(recipe)}
					className='invisible absolute bottom-4 right-4 block cursor-pointer rounded-lg bg-[#FFD7C9] p-1 text-sm text-black opacity-0 transition-all duration-[400ms] group-hover:visible group-hover:opacity-100'
				>
					<Maximize className='h-6 hover:scale-125' />
				</span>
			</div>
			<div className='mb-2 flex flex-wrap'>
				{recipe.mealType?.map((type, idx) => (
					<span
						key={idx}
						className='inline-block rounded-xl bg-orange-100 px-2 py-[2px] text-sm italic tracking-wide text-gray-700'
					>
						{type}
					</span>
				))}
			</div>
			<div className='max-w-[300px] font-roboto text-lg font-semibold'>{recipe.label}</div>
		</motion.li>
	);
};

export default RecipeRow;
