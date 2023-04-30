import { useParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import LinkTo from '../components/LinkTo';
import { CATEGORIES_ICON } from '../constants/categories';

const Categories = () => {
	const { idCateg } = useParams();

	return (
		<div className='p-3'>
			<div className='relative mb-6 max-w-6xl overflow-hidden'>
				<div className='flex flex-nowrap overflow-x-auto scroll-smooth'>
					<ul className='flex gap-3 py-3'>
						{/* TODO: Think about "All" category, might be remove? */}
						{CATEGORIES_ICON.map(icon => (
							<li
								key={icon.id}
								className={`relative h-24 w-24 cursor-pointer rounded-3xl border-2 transition-all duration-500 sm:h-32 sm:w-32 ${
									icon.id === idCateg ? 'border-green-500 bg-green-50' : 'border-gray-300'
								}`}
							>
								<LinkTo to={icon.id} className='flex h-full w-full flex-col justify-evenly sm:p-4'>
									<img src={icon.url} alt={icon.name} className='mx-auto block w-10' />
									<div className='text-center'>{icon.name}</div>
								</LinkTo>
							</li>
						))}
					</ul>
				</div>
				<button className='absolute'>&#8249;</button>
				<button className='absolute'>&#8250;</button>
			</div>
			<div>
				<ul className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] justify-items-center gap-2 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] sm:gap-3 md:gap-6'>
					<CategoryList active={idCateg} />
				</ul>
			</div>
		</div>
	);
};

export default Categories;
