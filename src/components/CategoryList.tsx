import {
	COOKIES_LIST,
	INITIAL_CATE_SHOW,
	SALADS_LIST,
	SEA_LIST,
	SOUPS_LIST
} from '../constants/categories';
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
			case 'soups':
				return SOUPS_LIST;
			case 'seas':
				return SEA_LIST;
			default:
				return INITIAL_CATE_SHOW;
		}
	};

	return (
		<>
			{typeCategoryList().map(category => (
				<li key={category.id} className='mb-3 cursor-pointer'>
					<LinkTo to={`/recipes/${category.name}`}>
						<img
							src={category.url}
							alt={category.name}
							className='mb-2 h-[180px] w-[250px] rounded-2xl object-cover sm:h-[210px]'
						/>
						<div className='font-roboto text-[17px]'>{category.name}</div>
					</LinkTo>
				</li>
			))}
		</>
	);
};

export default CategoryList;
