import { SVGProps } from '../../types/SVGInterface.';

const Loader = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M19.933 13.041a8 8 0 11-9.925-8.788c3.899-1 7.935 1.007 9.425 4.747'></path>
		<path d='M20 4v5h-5'></path>
	</svg>
);

export default Loader;
