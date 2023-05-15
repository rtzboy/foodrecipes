export const staggerContainer = (delay: number) => ({
	hidden: {
		transition: {
			when: 'afterChildren'
		}
	},
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: delay
		}
	}
});

export const childEffectIn = () => ({
	hidden: { scale: 0.5, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { type: 'spring' } }
});

export const staggerParent = (staggerChildren: number, delayChildren: number) => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren: staggerChildren,
			delayChildren: delayChildren
		}
	}
});

type TextDirectionType = 'left' | 'right' | 'up' | 'down';

export const textMotion = (direction: TextDirectionType) => ({
	hidden: {
		x: direction === 'right' ? 400 : direction === 'left' ? -400 : 0,
		y: direction === 'up' ? 400 : direction === 'down' ? -400 : 0,
		opacity: 0
	},
	visible: { x: 0, y: 0, opacity: 1, transition: { type: 'spring' } }
});
