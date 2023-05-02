import DynamicBg from './components/DynamicBg';
import LinkTo from './components/LinkTo';
import WordLoop from './components/WordLoop';
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
			<section className='relative'>
				<DynamicBg bglist={bgList} />
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
		</main>
	);
};

export default App;
