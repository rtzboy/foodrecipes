import { SVGProps } from '../../types/SVGInterface.';

const LoadingAnim = (props: SVGProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='3.221 37.236 94.073 25.914'
		style={{ margin: 'auto', background: 'none' }}
		{...props}
	>
		<circle cx='84' cy='50' r='10' fill='#0a0a0a'>
			<animate
				attributeName='r'
				begin='0s'
				calcMode='spline'
				dur='0.5s'
				keySplines='0 0.5 0.5 1'
				keyTimes='0;1'
				repeatCount='indefinite'
				values='7;0'
			></animate>
			<animate
				attributeName='fill'
				begin='0s'
				calcMode='discrete'
				dur='2s'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='#0a0a0a;#f9ae5c;#7e4141;#3d4051;#0a0a0a'
			></animate>
		</circle>
		<circle cx='16' cy='50' r='10' fill='#0a0a0a'>
			<animate
				attributeName='r'
				begin='0s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='0;0;7;7;7'
			></animate>
			<animate
				attributeName='cx'
				begin='0s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='16;16;16;50;84'
			></animate>
		</circle>
		<circle cx='50' cy='50' r='10' fill='#3d4051'>
			<animate
				attributeName='r'
				begin='-0.5s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='0;0;7;7;7'
			></animate>
			<animate
				attributeName='cx'
				begin='-0.5s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='16;16;16;50;84'
			></animate>
		</circle>
		<circle cx='84' cy='50' r='10' fill='#7e4141'>
			<animate
				attributeName='r'
				begin='-1s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='0;0;7;7;7'
			></animate>
			<animate
				attributeName='cx'
				begin='-1s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='16;16;16;50;84'
			></animate>
		</circle>
		<circle cx='16' cy='50' r='10' fill='#f9ae5c'>
			<animate
				attributeName='r'
				begin='-1.5s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='0;0;7;7;7'
			></animate>
			<animate
				attributeName='cx'
				begin='-1.5s'
				calcMode='spline'
				dur='2s'
				keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
				keyTimes='0;0.25;0.5;0.75;1'
				repeatCount='indefinite'
				values='16;16;16;50;84'
			></animate>
		</circle>
	</svg>
);

export default LoadingAnim;
