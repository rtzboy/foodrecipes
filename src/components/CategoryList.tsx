import { COOKIES_LIST, INITIAL_CATE_SHOW, SALADS_LIST } from '../constants/categories';
import LinkTo from './LinkTo';

type CategoryListProps = {
	active?: string;
};

const CategoryList = ({ active }: CategoryListProps) => {
	const typeCategoryList = () => {
		switch (active) {
			case 'cookies':
				return COOKIES_LIST;
			case 'salads':
				return SALADS_LIST;
			default:
				return INITIAL_CATE_SHOW;
		}
	};

	return (
		<>
			{typeCategoryList().map(category => (
				<li
					key={category.id}
					className='flex h-[220px] w-[240px] cursor-pointer flex-col justify-between border border-neutral-500'
				>
					<LinkTo to={`/recipes/${category.name}`}>
						<img
							src={category.url}
							alt={category.name}
							className='h-[180px] w-[240px] object-cover'
						/>
						<div>{category.name}</div>
					</LinkTo>
				</li>
			))}
		</>
	);
};

export default CategoryList;
