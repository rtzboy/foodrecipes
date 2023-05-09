import { useState } from 'react';
import { RecipeDetailsType } from '../types/recipeTypes';

type RecipeDetailsProps = {
	details: RecipeDetailsType;
};

// TODO: add to refresh page ? <div>{res.id}</div>
// TODO: refactor to fit into modal
// remove?
// ShareAs: res.shareAs>

const RecipeDetails = ({ details }: RecipeDetailsProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='grid max-w-7xl overflow-hidden rounded-2xl bg-white md:grid-cols-[1fr,1fr]'>
			<div>
				<img
					src={details.images.large?.url || details.images.regular?.url}
					alt=''
					className='h-full w-full max-w-xl object-cover md:max-w-md'
				/>
			</div>
			<div className='flex flex-col items-start gap-4 p-8'>
				<h2 className='text-3xl font-bold'>{details.label}</h2>
				<div>Calories: {details.calories.toFixed(2)}</div>
				<div>{details.cuisineType.join(' - ')}</div>
				<div>DishType: {details.dishType?.join(' - ')}</div>
				<div>
					<div>
						<span>Ingredient</span>
						<span onClick={() => setOpen(!open)} className='px-2'>
							iconxd
						</span>
					</div>
					<div className='relative'>
						<ul
							className={`absolute -top-[250px] left-full z-[9999] flex w-[500px] flex-col gap-1 bg-gray-200/95 p-4 transition-all duration-700 ${
								open ? 'visible opacity-100' : 'invisible opacity-0'
							}`}
						>
							{details.ingredientLines.map((ingre, idx) => (
								<li key={idx} className='p-1'>
									{ingre}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div>{details.mealType.join('')}</div>
				<div>time: {details.totalTime}</div>
				<div className='text-blue-500'>
					<a href={details.url} target='_blank' rel='noreferrer'>
						{details.source}
					</a>
				</div>
				<div>{details.yield}</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
