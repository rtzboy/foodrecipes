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
			<div className='relative'>
				<img
					src={recipe.images.large?.url || recipe.images.regular?.url}
					alt=''
					className='mb-3 w-[300px] rounded-2xl object-cover'
				/>
				<span className='absolute left-2 top-2 block rounded-lg bg-orange px-2 py-1 font-inter text-sm text-white'>
					by {recipe.source}
				</span>
				<span
					onClick={() => setPreviewRecipe(recipe)}
					className='group absolute bottom-4 right-4 block cursor-pointer rounded-lg bg-light-orange p-1 text-sm text-black'
				>
					<Maximize className='h-6 transition-all group-hover:scale-125' />
				</span>
			</div>
			<div className='mb-2 flex flex-wrap'>
				{recipe.mealType?.map((type, idx) => (
					<span
						key={idx}
						className='inline-block rounded-xl bg-whisper-blue px-2 py-[2px] font-inter text-[13px] italic tracking-wider text-gray'
					>
						{type}
					</span>
				))}
			</div>
			<div className='max-w-[300px] font-space_grotesk text-lg font-semibold'>{recipe.label}</div>
		</motion.li>
	);
};

export default RecipeRow;
