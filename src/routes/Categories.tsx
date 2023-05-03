import { AnimatePresence, motion } from 'framer-motion';
import CategoryList from '../components/CategoryList';
import {
	CATEGORIES_ICON,
	COOKIES_LIST,
	INITIAL_CATE_SHOW,
	SALADS_LIST,
	SEA_LIST,
	SOUPS_LIST
} from '../constants/categories';
import { parentCateg } from '../constants/motionAnimations';
import { useCategoryContext } from '../lib/contexts/CategoryContext';

const Categories = () => {
	const { categories, setCategories } = useCategoryContext();

	return (
		<div className='pt-[80px]'>
			<div className='mx-auto max-w-7xl p-3 sm:p-6'>
				<div className='relative mb-6 max-w-6xl overflow-hidden'>
					<div className='flex flex-nowrap overflow-x-auto scroll-smooth'>
						<ul className='flex gap-3 py-3'>
							{CATEGORIES_ICON.map(icon => (
								<li
									key={icon.id}
									className={`relative h-24 w-24 cursor-pointer rounded-3xl border-2 transition-all duration-500 sm:h-32 sm:w-32 ${
										icon.id === categories ? 'border-green-500 bg-green-50' : 'border-gray-300'
									}`}
								>
									<div
										onClick={() => setCategories(icon.id)}
										className='flex h-full w-full flex-col justify-evenly sm:p-4'
									>
										<img src={icon.url} alt={icon.name} className='mx-auto block w-10' />
										<div className='text-center'>{icon.name}</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<button className='absolute'>&#8249;</button>
					<button className='absolute'>&#8250;</button>
				</div>
				<motion.ul
					initial='hidden'
					animate='visible'
					variants={parentCateg(0.2)}
					className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center gap-2 overflow-hidden sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:gap-3 md:gap-6'
				>
					<AnimatePresence>
						{typeCategoryList(categories).map(item => (
							<CategoryList key={item.id} {...item} />
						))}
					</AnimatePresence>
				</motion.ul>
			</div>
		</div>
	);
};

const typeCategoryList = (active?: string) => {
	switch (active) {
		case 'cookies':
			return COOKIES_LIST;
		case 'salads':
			return SALADS_LIST;
		case 'soups':
			return SOUPS_LIST;
		case 'seas':
			return SEA_LIST;
		default:
			return INITIAL_CATE_SHOW;
	}
};

export default Categories;
