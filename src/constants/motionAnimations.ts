export const parentCateg = (delay: number) => ({
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

export const childCateg = () => ({
	hidden: { scale: 0.8, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { type: 'spring' } }
});
