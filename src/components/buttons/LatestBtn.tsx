import { motion } from 'framer-motion';
import ArrowDown from '../icons/ArrowDown';
import Loader from '../icons/Loader';

type LatestBtnProps = {
	loadStatus: boolean;
};

const LatestBtn = ({ loadStatus }: LatestBtnProps) => {
	if (loadStatus)
		return (
			<span className='text-orange'>
				<Loader className='h-9 animate-spin' strokeWidth={2} />
			</span>
		);

	return (
		<button onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}>
			<motion.span
				animate={{ y: [0, 20, 0] }}
				transition={{ duration: 1.7, repeat: Infinity, repeatType: 'loop' }}
				className='block text-orange'
			>
				<ArrowDown className='h-9' />
			</motion.span>
		</button>
	);
};

export default LatestBtn;
