import { drinks, healthy, lunch, shrimp } from './assets/popular/popularFiles';
import DynamicBg from './components/DynamicBg';
import LinkTo from './components/LinkTo';
import WordLoop from './components/WordLoop';
import Arrow from './components/icons/Arrow';
import Fork from './components/icons/Fork';

const word_list = ['Fried', 'Baked', 'Steamed', 'Boiled'];
const bgList = [
	'/src/assets/bgFood.jpg',
	'/src/assets/bgFoodTwo.jpg',
	'/src/assets/bgFoodThree.jpg',
	'/src/assets/bgFoodFour.jpg'
];

const App = () => {
	return (
		<main>
			<section className='relative h-screen w-full overflow-hidden'>
				<DynamicBg bglist={bgList} opacitylvl={0.6} />
				<div className='absolute left-1/2 top-1/2 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 sm:gap-6'>
					<h1 className='flex justify-center text-6xl font-bold text-orange-700 sm:text-7xl'>
						<span className='opacity-0'>&nbps;</span>
						<WordLoop listwords={word_list} duration={2.5} />
					</h1>
					<p className='max-w-3xl px-4 text-center text-3xl sm:px-4 sm:text-4xl'>
						no matter how you cook, with our website, you will be able to discover a wide variety of
						delicious food recipes from different websites, all in one place.
					</p>
					<p className='max-w-4xl px-4 text-center text-xl text-gray-600 sm:px-4'>
						Forget about browsing through multiple pages in search of the perfect recipe; here, we
						offer you the convenience of accessing a vast catalog of tasty and creative dishes.
					</p>
					<LinkTo to='recipes'>
						<button className='flex items-center gap-2 rounded-lg bg-orange-700 px-4 py-2 text-lg font-semibold text-white transition-all hover:bg-orange-400'>
							<span>Explore Recipes</span>
							<Fork className='h-6' />
						</button>
					</LinkTo>
				</div>
			</section>
			<section className='relative'>
				<div
					className='absolute h-[50vh] w-full bg-black bg-cover bg-center bg-no-repeat'
					style={{ backgroundImage: 'url("/src/assets/popularcat.png")' }}
				/>
				<article className='relative z-50 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pt-[200px] text-center text-white'>
					<div className='text-lg font-bold tracking-wider'>FEATURE</div>
					<div className='text-5xl'>Popular Categories</div>
					<div className='mx-auto max-w-3xl text-lg'>
						Browse our popular categories and find culinary inspiration in one place. From classic
						dishes to gastronomic trends.
					</div>
					<ul className='flex flex-wrap justify-evenly gap-8'>
						{POP_CATEGORIES.map(category => (
							<li
								key={category.id}
								className='group relative h-60 w-60 overflow-hidden rounded-full border-8 border-white'
							>
								<div
									style={{ backgroundImage: `url(${category.url})` }}
									className='absolute h-56 w-56 rounded-full bg-cover transition-all duration-500 group-hover:scale-125'
								>
									<div className='h-56 w-56 rounded-full bg-black opacity-50 transition-all duration-500 group-hover:opacity-20' />
								</div>
								<LinkTo
									to='recipes'
									className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-white'
								>
									<div className='flex items-center gap-1 rounded-lg bg-orange-600 px-2 py-1'>
										<span className='whitespace-nowrap'>Discover Recipes</span>
										<Arrow className='h-5' />
									</div>
								</LinkTo>
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
};

const POP_CATEGORIES = [
	{ id: 1, url: drinks },
	{ id: 2, url: healthy },
	{ id: 3, url: lunch },
	{ id: 4, url: shrimp }
];

export default App;
