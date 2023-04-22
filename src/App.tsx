import { Dispatch, SetStateAction, useEffect } from 'react';
import { drinks, meals, salads } from './assets/categories/filesCate';
import { DrinksImg, FoodsImg, SaladsImg } from './assets/fontsImg/filesFontImg';
import LinkTo from './components/LinkTo';
import { randomRecipeCall } from './lib/api/recipe_api';
import { useInitialRecipeContext } from './lib/contexts/InitialRecipeContext';
import { InitialRecipe } from './types/recipeTypes';

const App = () => {
	const { randomRecipe, setRandomRecipe } = useInitialRecipeContext();

	useEffect(() => {
		if (randomRecipe) return;
		recipeOfTheDay(setRandomRecipe);
	}, []);

	return (
		<main className='border-b border-b-neutral-500 lg:grid lg:grid-cols-[2fr,1fr]'>
			<aside className='border-b border-neutral-500 px-6 py-6 lg:row-span-2 lg:border-b-0 lg:border-r lg:py-0'>
				<div className='py-6 font-salsa text-[65px] leading-tight sm:text-[80px]'>
					<p className='font-bold tracking-wider text-orange-600'>FOOD</p>
					<p className='tracking-wider'>RECIPES</p>
				</div>
				<div className='mt-12 flex flex-col items-center gap-12 sm:flex-row sm:items-stretch sm:justify-evenly sm:gap-8'>
					<div className='relative h-64 w-64 rounded-full border border-black'>
						<div className='absolute -left-[28px] -top-[26px] -z-10 h-[310px] w-[310px] rounded-full border border-black' />
						<div className='absolute -left-[98px] -top-[26px] -z-10 hidden h-[310px] w-[310px] rounded-full border border-black sm:block ' />
						<div className='absolute -top-[26px] left-[48px] -z-10 hidden h-[310px] w-[310px] rounded-full border border-black sm:block ' />
						{randomRecipe && <img src={randomRecipe.image} alt='' className='rounded-full' />}
					</div>
					<div className='relative h-[350px] w-64 border border-black bg-white p-6 font-sofia'>
						<div className='absolute left-2 top-2 -z-10 h-[350px] w-64 bg-black' />
						<p className='font-bold'>{randomRecipe && randomRecipe.label}</p>
						<ul className='list-disc text-[15px]'>
							{randomRecipe &&
								randomRecipe.ingredientLines.slice(0, 6).map((mix, idx) => (
									<li key={idx} className='ml-4 py-[8px]'>
										{[...mix].slice(0, 23).join('')}...
									</li>
								))}
							<li className='ml-4 list-none py-1 text-base text-orange-600 underline'>Read More</li>
						</ul>
					</div>
				</div>
			</aside>
			<section className='border-b border-b-stone-500 bg-purple-200 p-10'>
				<div className='relative flex h-full justify-evenly gap-4 lg:block'>
					<div className='hidden gap-6 text-3xl xm:flex xm:flex-col xm:justify-center sm:text-6xl lg:absolute lg:-left-32 lg:top-4'>
						<p className='rotate-6'>
							<img src={SaladsImg} alt='' className='w-[200px]' />
						</p>
						<p className='-rotate-[4deg]'>
							<img src={DrinksImg} alt='' className='w-[200px]' />
						</p>
						<p className='rotate-[10deg]'>
							<img src={FoodsImg} alt='' className='w-[200px]' />
						</p>
					</div>
					<div className='flex flex-col gap-4 lg:items-end'>
						<img
							src={salads}
							alt=''
							className='h-24 w-[220px] border-2 border-neutral-500 object-cover'
						/>
						<img
							src={drinks}
							alt=''
							className='h-24 w-[220px] border-2 border-neutral-500 object-cover'
						/>
						<img
							src={meals}
							alt=''
							className='h-24 w-[220px] border-2 border-neutral-500 object-cover'
						/>
					</div>
				</div>
			</section>
			<section className='font-sofia sm:grid sm:grid-cols-2'>
				<div className='px-8 py-6 sm:py-12 md:px-3'>
					<ul className='flex flex-col gap-6 font-bold'>
						{LIST_RECIPE.map(typeFood => (
							<li
								key={typeFood.id}
								className='rounded-3xl border border-stone-500 text-center transition-all hover:border-orange-600 hover:text-orange-600'
							>
								<LinkTo to={typeFood.link} className='block w-full py-3'>
									{typeFood.name}
								</LinkTo>
							</li>
						))}
					</ul>
				</div>
				<div className='mb-8 flex flex-col items-center justify-center gap-4 px-3'>
					<p className='text-4xl font-semibold'>+500</p>
					<p className='text-2xl font-semibold'>Food Recipes</p>
					<p className='text-center text-xl font-semibold'>All around the world</p>
				</div>
			</section>
		</main>
	);
};

const recipeOfTheDay = async (
	setRandomRecipe: Dispatch<SetStateAction<InitialRecipe | undefined>>
) => {
	const { success, message, recipeDay } = await randomRecipeCall();
	if (success) return setRandomRecipe(recipeDay);
	console.log(message);
};

const LIST_RECIPE = [
	{ id: 1, name: 'Steaks', link: '/' },
	{ id: 2, name: 'Soups', link: '/' },
	{ id: 3, name: 'Fish', link: '/' },
	{ id: 4, name: 'Healthy', link: '/' }
];
export default App;
