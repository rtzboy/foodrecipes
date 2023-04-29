import { useParams } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import LinkTo from '../components/LinkTo';
import { CATEGORIES_ICON } from '../constants/categories';

const Categories = () => {
	const { idCateg } = useParams();

	return (
		<div className='px-12 py-6'>
			<div className='relative mb-6 max-w-6xl overflow-hidden'>
				<div className='flex flex-nowrap overflow-x-auto scroll-smooth'>
					<ul className='flex gap-6 py-3'>
						{CATEGORIES_ICON.map(icon => (
							<li
								key={icon.id}
								className='relative h-32 w-32 cursor-pointer border border-neutral-500 bg-white'
							>
								<LinkTo to={icon.id} className='flex h-full w-full flex-col justify-evenly p-4'>
									<img src={icon.url} alt={icon.name} className='mx-auto block w-10' />
									<div className='text-center'>{icon.name}</div>
									<div
										className={`absolute left-[6px] top-[6px] -z-10 h-32 w-32 border border-neutral-500 transition-all duration-500 ${
											icon.id === idCateg
												? 'visible bg-neutral-500 opacity-100'
												: 'invisible opacity-0'
										}`}
									></div>
								</LinkTo>
							</li>
						))}
					</ul>
				</div>
				<button className='absolute'>&#8249;</button>
				<button className='absolute'>&#8250;</button>
			</div>
			<div>
				<ul className='flex flex-wrap gap-12 font-sofia text-lg'>
					<CategoryList active={idCateg} />
				</ul>
			</div>
		</div>
	);
};

export default Categories;
