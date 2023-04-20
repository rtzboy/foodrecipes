import { SVGProps } from '../../types/SVGInterface.';

const Menu = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='36'
		viewBox='0 0 24 24'
		strokeWidth='1.75'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M4 6l16 0'></path>
		<path d='M4 12l16 0'></path>
		<path d='M4 18l16 0'></path>
	</svg>
);

export default Menu;
