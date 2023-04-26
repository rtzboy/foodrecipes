import { Link } from 'react-router-dom';
import {
	biscottiCookie,
	chocolateCookie,
	gingerbreadCookie,
	macaronCookie,
	oatmealCookie,
	shortbreadCookie,
	snickerdoodlesCookie,
	sugarCookie
} from '../assets/categories/cookies/filesCookies';
import { caesarSalad, fruitSalad, potatoSalad } from '../assets/categories/salads/filesSalads';

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
					<Link to='/recipes'>
						<img
							src={category.url}
							alt={category.name}
							className='h-[180px] w-[240px] object-cover'
						/>
						<div>{category.name}</div>
					</Link>
				</li>
			))}
		</>
	);
};

const COOKIES_LIST = [
	{ id: 1, name: 'Chocolate cookie', url: chocolateCookie },
	{ id: 2, name: 'Oatmeal cookie', url: oatmealCookie },
	{ id: 3, name: 'Sugar cookie', url: sugarCookie },
	{ id: 4, name: 'Macarons cookie', url: macaronCookie },
	{ id: 5, name: 'Shortbread cookie', url: shortbreadCookie },
	{ id: 6, name: 'Gingerbread cookie', url: gingerbreadCookie },
	{ id: 7, name: 'Snickerdoodles cookie', url: snickerdoodlesCookie },
	{ id: 8, name: 'Biscotti cookie', url: biscottiCookie }
];

const SALADS_LIST = [
	{ id: 1, name: 'Caesar salad', url: caesarSalad },
	{ id: 2, name: 'Potato salad', url: potatoSalad },
	{ id: 3, name: 'Fruit salad', url: fruitSalad }
];

const INITIAL_CATE_SHOW = [
	{ id: 1, name: 'Sugar cookie', url: sugarCookie },
	{ id: 2, name: 'Potato salad', url: potatoSalad },
	{ id: 3, name: 'Snickerdoodles cookie', url: snickerdoodlesCookie },
	{ id: 4, name: 'Fruit salad', url: fruitSalad },
	{ id: 5, name: 'Macarons cookie', url: macaronCookie }
];

export default CategoryList;
