import { SVGProps } from '../../types/SVGInterface.';

const Message = (props: SVGProps) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		stroke='currentColor'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth={1}
		viewBox='0 0 24 24'
	>
		<path stroke='none' d='M0 0h24v24H0z'></path>
		<path d='M8 9h8M8 13h6M12.5 20.5l-.5.5-3-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12a3 3 0 013 3v5.5M16 19h6M19 16v6'></path>
	</svg>
);

export default Message;
