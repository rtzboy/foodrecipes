import { motion } from 'framer-motion';
import LinkTo from './LinkTo';

type CategoryListProps = {
	id: number;
	name: string;
	url: string;
};

const CategoryList = ({ id, name, url }: CategoryListProps) => {
	return (
		<motion.li
			layout
			exit={{
				scale: 0.8,
				opacity: 0,
				transition: { duration: 0.4 }
			}}
			variants={varChildren}
			className='mb-3 cursor-pointer'
		>
			<LinkTo to={`/recipes/${name}`}>
				<img
					src={url}
					alt={name}
					className='mb-2 h-[180px] w-[250px] rounded-2xl object-cover sm:h-[210px]'
				/>
				<div className='font-roboto text-[17px]'>{name}</div>
			</LinkTo>
		</motion.li>
	);
};

const varChildren = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: { scale: 1, opacity: 1, transition: { type: 'spring' } }
};

export default CategoryList;
