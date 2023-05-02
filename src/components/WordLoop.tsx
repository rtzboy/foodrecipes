import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type WordLoopProps = {
	listwords: Array<string>;
	duration: number;
};

const variants = {
	hidden: (duration: any) => {
		return {
			x: 50,
			opacity: 0
		};
	},
	visible: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (duration: any) => {
		return {
			zIndex: 0,
			opacity: 0,
			x: -120
		};
	}
};

const WordLoop = ({ listwords, duration }: WordLoopProps) => {
	const [index, setIndex] = useState(0);
	let idTimeOut = useRef<number | undefined>(undefined);

	useEffect(() => {
		idTimeOut.current = setTimeout(() => {
			let next = index + 1;
			if (next === listwords.length) next = 0;
			setIndex(next);
		}, 1000 * duration);

		return () => clearTimeout(idTimeOut.current);
	}, [index, setIndex]);

	return (
		<AnimatePresence>
			<motion.span
				className='absolute'
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={variants}
				key={index}
				transition={{
					x: {
						type: 'spring'
					},
					opacity: { duration: 0.7 }
				}}
			>
				{listwords[index]}
			</motion.span>
		</AnimatePresence>
	);
};

export default WordLoop;
