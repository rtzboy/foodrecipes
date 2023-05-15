import { motion } from 'framer-motion';
import { useEffect } from 'react';
import xdddd from '../src/assets/whoweare.jpg';
import { drinks, healthy, lunch, shrimp } from './assets/popular/popularFiles';
import DynamicBg from './components/DynamicBg';
import Footer from './components/Footer';
import LinkTo from './components/LinkTo';
import SectionWrapper from './components/SectionWrapper';
import WordLoop from './components/WordLoop';
import Arrow from './components/icons/Arrow';
import Fork from './components/icons/Fork';
import { ALL_ARTICLES } from './constants/content';
import { childEffectIn, staggerContainer, textMotion } from './constants/motionAnimations';

// TODO: move to another file?
const word_list = ['Fried', 'Baked', 'Steamed', 'Boiled'];

const bgList = [
	'/src/assets/homeimgs/bghome.png',
	'/src/assets/homeimgs/bghome2.png',
	'/src/assets/homeimgs/bghome3.png',
	'/src/assets/homeimgs/bghome4.png'
];

const POP_CATEGORIES = [
	{ id: 1, url: drinks },
	{ id: 2, url: healthy },
	{ id: 3, url: lunch },
	{ id: 4, url: shrimp }
];

const App = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.title = 'Plate Explorer';
	}, []);

	return (
		<main>
			<section className='relative h-screen w-full overflow-hidden'>
				<DynamicBg bglist={bgList} opacitylvl={0.9} />
				<div className='absolute left-1/2 top-1/2 flex w-full max-w-7xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 font-space_grotesk font-semibold sm:gap-6'>
					<h1 className='flex justify-center text-5xl font-bold text-orange sm:text-7xl'>
						<span className='opacity-0'>&nbps;</span>
						<WordLoop listwords={word_list} duration={2.5} />
					</h1>
					<p className='max-w-3xl px-4 text-center text-2xl sm:px-4 sm:text-4xl'>
						no matter how you cook, with our website, you will be able to discover a wide variety of
						delicious food recipes from different websites, all in one place.
					</p>
					<p className='max-w-4xl px-4 text-center text-base font-normal text-gray sm:px-4 sm:text-lg'>
						Forget about browsing through multiple pages in search of the perfect recipe; here, we
						offer you the convenience of accessing a vast catalog of tasty and creative dishes.
					</p>
					<LinkTo to='recipes'>
						<button className='flex items-center gap-2 rounded-lg bg-orange px-4 py-2 font-semibold text-white transition-all hover:bg-orange/70'>
							<span>Explore Recipes</span>
							<Fork className='h-6' />
						</button>
					</LinkTo>
				</div>
			</section>
			<SectionWrapper className='py-20'>
				<div className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-4'>
					<div className='grid gap-8 font-space_grotesk font-semibold md:grid-cols-2'>
						<motion.div variants={textMotion('left')} className='flex flex-col gap-8'>
							<h2 className='tracking-wider text-orange'>WHO WE ARE</h2>
							<p className='text-3xl md:text-4xl '>
								Discover our platform to explore and enjoy exceptional recipes
							</p>
							<p className='font-inter font-normal text-gray'>
								Don't know what to cook? Don't worry. Our website also offers you popular
								categories, including classic dishes, international cuisine, vegetarian options and
								recipes for special occasions. These categories will inspire you and help you find
								the perfect recipe for any occasion.
							</p>
						</motion.div>
						<motion.div
							variants={{
								hidden: { scale: 0.5, opacity: 0 },
								visible: { scale: 1, opacity: 1, transition: { type: 'spring' } }
							}}
							className='relative flex items-center px-4 py-8'
						>
							<img src={xdddd} alt='' className='w-full rounded-xl' />
						</motion.div>
					</div>
				</div>
			</SectionWrapper>
			<SectionWrapper className='relative'>
				<div
					className='absolute h-[50vh] w-full bg-black bg-cover bg-center bg-no-repeat'
					style={{ backgroundImage: 'url("/src/assets/popularcat.png")' }}
				/>
				<article className='relative z-50 mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pt-[200px] text-center font-space_grotesk text-white'>
					<div className='font-bold tracking-wider'>
						<span className='rounded-lg bg-black/30 px-2 py-1'>FEATURED</span>
					</div>
					<motion.div variants={textMotion('up')} className='text-3xl font-semibold md:text-5xl'>
						Popular Categories
					</motion.div>
					<motion.div
						variants={textMotion('down')}
						className='mx-auto max-w-3xl font-inter text-base tracking-wide'
					>
						Browse our popular categories and find culinary inspiration in one place. From classic
						dishes to gastronomic trends.
					</motion.div>
					<motion.ul
						variants={staggerContainer(0.5)}
						className='flex flex-wrap justify-evenly gap-8'
					>
						{POP_CATEGORIES.map(category => (
							<motion.li
								variants={childEffectIn()}
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
									className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white'
								>
									<div className='flex items-center gap-1 rounded-lg bg-orange px-2 py-1'>
										<span className='whitespace-nowrap font-inter tracking-wide'>
											Discover Recipes
										</span>
										<Arrow className='h-5' />
									</div>
								</LinkTo>
							</motion.li>
						))}
					</motion.ul>
				</article>
			</SectionWrapper>
			<SectionWrapper className='mx-auto w-full max-w-7xl py-28'>
				<div className='flex flex-col gap-8 font-space_grotesk'>
					<motion.h2
						variants={textMotion('left')}
						className='text-center font-semibold tracking-wider text-orange'
					>
						KEEP READING
					</motion.h2>
					<motion.p
						variants={textMotion('right')}
						className='text-center text-3xl font-semibold md:text-5xl'
					>
						Articles and news
					</motion.p>
					<motion.ul
						variants={staggerContainer(0.4)}
						className='grid justify-items-center gap-4 px-4 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]'
					>
						{ALL_ARTICLES.map(blog => (
							<motion.li
								variants={childEffectIn()}
								key={blog.id}
								className='overflow-hidden rounded-xl bg-whisper-blue'
							>
								<LinkTo to={`articles/${blog.id}`}>
									<div className='relative'>
										<img src={blog.srcimg} alt={blog.title} className='w-[300px] object-cover' />
									</div>
								</LinkTo>
								<div className='max-w-[300px] p-4'>
									<h2 className='mb-2 text-lg font-semibold'>{blog.title}</h2>
									<p className='text-sm italic text-orange'>2023</p>
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</SectionWrapper>
			<Footer />
		</main>
	);
};

export default App;
