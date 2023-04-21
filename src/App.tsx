import { drinks, meals, salads } from './assets/categories/filesCate';
import { DrinksImg, FoodsImg, SaladsImg } from './assets/fontsImg/filesFontImg';
import LinkTo from './components/LinkTo';

const App = () => {
	return (
		<main className='border-b border-b-neutral-500 lg:grid lg:grid-cols-[2fr,1fr]'>
			<aside className='border-b border-neutral-500 px-6 py-6 lg:row-span-2 lg:border-b-0 lg:border-r lg:py-0'>
				<div className='py-6 font-salsa text-5xl leading-tight sm:text-[80px]'>
					<p className='font-bold tracking-wider text-orange-600'>FOOD</p>
					<p className='tracking-wider'>RECIPES</p>
				</div>
				<div className='flex flex-col items-center gap-8 sm:flex-row sm:items-stretch sm:justify-center'>
					<p className='h-64 w-64 border border-black'></p>
					<p className='h-80 w-64 border border-black'></p>
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

const LIST_RECIPE = [
	{ id: 1, name: 'Steaks', link: '/' },
	{ id: 2, name: 'Soups', link: '/' },
	{ id: 3, name: 'Fish', link: '/' },
	{ id: 4, name: 'Healthy', link: '/' }
];

export default App;
