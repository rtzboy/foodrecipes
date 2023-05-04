import { SVGProps } from '../../types/SVGInterface.';

const XMark = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
	>
		<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
	</svg>
);

export default XMark;