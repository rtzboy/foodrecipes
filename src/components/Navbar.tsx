import { useState } from 'react';
import LinkTo from './LinkTo';
import Collapse from './icons/Collapse';
import Menu from './icons/Menu';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const links = NAV_LINKS.map(link => (
		<li key={link.id}>
			<LinkTo
				to={link.linkTo}
				active='text-orange-600'
				replace
				className='transition-all hover:text-orange-600'
			>
				{link.name}
			</LinkTo>
		</li>
	));

	return (
		<nav className='flex items-center justify-between border-b border-b-stone-500 p-6 font-roboto'>
			<div className='text-2xl'>MyRecipes</div>
			<ul className='hidden gap-6 sm:flex'>{links}</ul>
			<div className='hidden text-white sm:block'>
				<a href='' className='bg-neutral-900 px-6 py-2'>
					SINGUP
				</a>
			</div>
			{/* mobile */}
			<div className='relative flex h-9 items-center justify-center sm:hidden'>
				<span onClick={() => setToggle(!toggle)} className={`cursor-pointer transition-all`}>
					<span>{toggle ? <Collapse className='h-8' /> : <Menu />}</span>
				</span>
				<ul
					className={`absolute right-0 top-[60px] flex flex-col items-center gap-4 overflow-hidden border border-neutral-500 bg-white py-4 transition-all duration-700 ${
						toggle ? 'visible w-[180px] opacity-100' : 'invisible w-0 opacity-0'
					}`}
				>
					{links}
					<li>
						<div className='text-white'>
							<a href='' className='bg-neutral-900 px-6 py-2'>
								SINGUP
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

const NAV_LINKS = [
	{ id: 1, name: 'HOME', linkTo: '/' },
	{ id: 2, name: 'RECIPES', linkTo: 'recipes' },
	{ id: 3, name: 'CONTACT', linkTo: 'contact' }
];

export default Navbar;
