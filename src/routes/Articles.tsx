import imgtest from '../assets/bgFoodFour.jpg';
import { boiledeggs, culinaryskills, homemaderecipes } from '../assets/blogimgs/filesblogimgs';

type ArticlesProps = {};

const Articles = (props: ArticlesProps) => {
	// TODO: change img
	return (
		<main>
			<section className='relative'>
				<div className='h-[400px]'>
					<img src={imgtest} alt='imgtest' className='h-[400px] w-full object-cover' />
				</div>
				<div className='text-2xp absolute'>Blogs</div>
			</section>
			<section className='mx-auto max-w-7xl p-36'>
				<div className='px-4'>
					<ul className='flex flex-col gap-4'>
						{ALL_ARTICLES.map(article => (
							<li key={article.id} className='grid grid-cols-[2fr,1fr] gap-4'>
								<div>
									<div>{article.title}</div>
									<div>{article.description}</div>
									<div>{article.date}</div>
									<div>{article.link}</div>
								</div>
								<div>
									<img src={article.srcimg} alt={article.title} />
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export const ALL_ARTICLES = [
	{
		id: 1,
		title: 'How to peel hard-boiled eggs perfectly?, every time.',
		description:
			'Lorem ipsum dolor sit amet adipisicing elit. Repellat, eaque! Et repellat mollitia aliquid laboriosam eligendi ipsa illum commodi expedita quia molestiae, rem, dicta ducimus beatae doloribus animi sit recusandae!',
		date: '2022',
		srcimg: boiledeggs,
		link: 'articles/001'
	},
	{
		id: 2,
		title: 'Boost your culinary skills and conquer the kitchen.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eaque! Et repellat mollitia aliquid laboriosam eligendi ipsa illum commodi expedita quia molestiae, rem, dicta ducimus beatae doloribus animi sit recusandae!',
		date: '2022',
		srcimg: culinaryskills,
		link: 'articles/002'
	},
	{
		id: 3,
		title: 'Boost your culinary skills and conquer the kitchen.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eaque! Et repellat mollitia aliquid laboriosam eligendi ipsa illum commodi expedita quia molestiae, rem, dicta ducimus beatae doloribus animi sit recusandae!',
		date: '2022',
		srcimg: homemaderecipes,
		link: 'articles/003'
	}
];

export default Articles;
