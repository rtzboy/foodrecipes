import { SVGProps } from '../../types/SVGInterface.';

const Search = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width='36'
		height='36'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1.25}
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6'></path>
	</svg>
);

export default Search;
