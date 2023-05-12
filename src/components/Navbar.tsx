import { useState } from 'react';
import logo from '../assets/logo.png';
import LinkTo from './LinkTo';
import Collapse from './icons/Collapse';
import Menu from './icons/Menu';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const links = NAV_LINKS.map(link => (
		<li key={link.id} className='w-full text-center'>
			<LinkTo
				to={link.linkTo}
				active='text-orange-600 bg-orange-500 text-white'
				className='block w-full py-2 transition-all hover:bg-orange-500 hover:text-white'
			>
				{link.name}
			</LinkTo>
		</li>
	));

	return (
		<nav className='fixed top-0 z-[99] flex w-full items-center overflow-x-hidden bg-white py-5 text-lg sm:px-7'>
			<div className='mx-auto flex w-full max-w-7xl justify-between px-4 sm:px-8'>
				<LinkTo to='/' className='text-3xl font-bold'>
					<div className='flex items-center gap-1'>
						<img src={logo} alt='' className='w-10' />
						<span>Plate Explorer</span>
					</div>
				</LinkTo>
				<ul className='hidden gap-6 sm:flex'>
					{NAV_LINKS.map(link => (
						<li key={link.id} className='w-full text-center'>
							<LinkTo
								to={link.linkTo}
								active='text-orange-600 underline underline-offset-4 decoration-2'
								className='under block w-full py-2 transition-all hover:text-orange-600'
							>
								{link.name}
							</LinkTo>
						</li>
					))}
				</ul>
				{/* mobile */}
				<div className='relative flex h-9 items-center justify-center sm:hidden'>
					<span onClick={() => setToggle(!toggle)} className={`cursor-pointer transition-all`}>
						<span>{toggle ? <Collapse className='h-8' /> : <Menu />}</span>
					</span>
					<ul
						className={`fixed right-5 top-[75px] flex flex-col items-center overflow-hidden rounded-xl bg-white transition-all duration-700 ${
							toggle ? 'visible w-[180px] opacity-100' : 'invisible w-0 opacity-0'
						}`}
					>
						{links}
					</ul>
				</div>
			</div>
		</nav>
	);
};

const NAV_LINKS = [
	{ id: 1, name: 'Home', linkTo: '/' },
	{ id: 2, name: 'Recipes', linkTo: 'recipes' },
	{ id: 3, name: 'Articles', linkTo: 'articles' }
];

export default Navbar;
