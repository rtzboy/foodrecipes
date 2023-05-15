import { motion } from 'framer-motion';
import { staggerParent } from '../constants/motionAnimations';

type SectionWrapperProps = {
	children: any;
	className?: string;
};

const SectionWrapper = ({ children, className }: SectionWrapperProps) => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			variants={staggerParent(0.5, 0)}
			viewport={{ once: true, amount: 0.25 }}
			className={`overflow-x-hidden ${className || ''}`}
		>
			{children}
		</motion.section>
	);
};

export default SectionWrapper;
