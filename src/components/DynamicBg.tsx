import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type DynamicBgProps = {
	bglist: Array<string>;
	opacitylvl: number;
};

const fnVariants = (opacity: number) => ({
	hidden: {
		opacity: 0,
		scale: 1.2
	},
	visible: {
		opacity,
		scale: 1,
		transition: { duration: 2 }
	},
	exit: {
		opacity: 0,
		scale: 1.2,
		transition: { duration: 2 }
	}
});

const DynamicBg = ({ bglist, opacitylvl }: DynamicBgProps) => {
	const [bgIndex, setBgIndex] = useState(0);

	useEffect(() => {
		const idClean = setInterval(() => {
			let curr = bgIndex + 1;
			if (curr === bglist.length) curr = 0;
			setBgIndex(curr);
		}, 1000 * 7);

		return () => clearInterval(idClean);
	}, [bgIndex, setBgIndex, bglist.length]);

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={bgIndex}
				initial='hidden'
				animate='visible'
				exit='exit'
				variants={fnVariants(opacitylvl)}
				transition={{
					opacity: { duration: 1.5 }
				}}
				style={{ backgroundImage: `url(${bglist[bgIndex]})` }}
				className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat`}
			/>
		</AnimatePresence>
	);
};

export default DynamicBg;
