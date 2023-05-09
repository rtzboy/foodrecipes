import { SVGProps } from '../../types/SVGInterface.';

const NextArrow = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='1.5'
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M7 7l5 5-5 5M13 7l5 5-5 5'></path>
	</svg>
);

export default NextArrow;
