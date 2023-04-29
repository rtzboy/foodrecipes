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
import { cookiesIcon, saladsIcon } from '../assets/iconsImg/filesIconsImg';

export const CATEGORIES_ICON = [
	{ id: 'cookies', name: 'Cookies', url: cookiesIcon },
	{ id: 'salads', name: 'Salads', url: saladsIcon }
];

export const COOKIES_LIST = [
	{ id: 1, name: 'Chocolate cookie', url: chocolateCookie },
	{ id: 2, name: 'Oatmeal cookie', url: oatmealCookie },
	{ id: 3, name: 'Sugar cookie', url: sugarCookie },
	{ id: 4, name: 'Macarons cookie', url: macaronCookie },
	{ id: 5, name: 'Shortbread cookie', url: shortbreadCookie },
	{ id: 6, name: 'Gingerbread cookie', url: gingerbreadCookie },
	{ id: 7, name: 'Snickerdoodles cookie', url: snickerdoodlesCookie },
	{ id: 8, name: 'Biscotti cookie', url: biscottiCookie }
];

export const SALADS_LIST = [
	{ id: 1, name: 'Caesar salad', url: caesarSalad },
	{ id: 2, name: 'Potato salad', url: potatoSalad },
	{ id: 3, name: 'Fruit salad', url: fruitSalad }
];

export const INITIAL_CATE_SHOW = [
	{ id: 1, name: 'Sugar cookie', url: sugarCookie },
	{ id: 2, name: 'Potato salad', url: potatoSalad },
	{ id: 3, name: 'Snickerdoodles cookie', url: snickerdoodlesCookie },
	{ id: 4, name: 'Fruit salad', url: fruitSalad },
	{ id: 5, name: 'Macarons cookie', url: macaronCookie }
];
