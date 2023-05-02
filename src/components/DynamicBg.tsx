import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type DynamicBgProps = {
	bglist: Array<string>;
};

const variants = {
	hidden: {
		opacity: 0,
		scale: 1.2
	},
	visible: {
		opacity: 0.5,
		scale: 1,
		transition: { duration: 2 }
	},
	exit: {
		opacity: 0,
		scale: 1.2,
		transition: { duration: 2 }
	}
};

const DynamicBg = ({ bglist }: DynamicBgProps) => {
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
		<div className='h-screen w-full overflow-hidden'>
			<AnimatePresence mode='wait'>
				<motion.div
					key={bgIndex}
					initial='hidden'
					animate='visible'
					exit='exit'
					variants={variants}
					transition={{
						opacity: { duration: 1.5 }
					}}
					style={{ backgroundImage: `url(${bglist[bgIndex]})` }}
					className={`h-screen w-full bg-cover bg-center bg-no-repeat`}
				/>
			</AnimatePresence>
		</div>
	);
};

export default DynamicBg;
