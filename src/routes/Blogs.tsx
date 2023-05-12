import { useEffect } from 'react';
import imgtest from '../assets/bgFoodFour.jpg';
import Footer from '../components/Footer';
import LinkTo from '../components/LinkTo';
import Arrow from '../components/icons/Arrow';
import SingleArrow from '../components/icons/SingleArrow';
import { ALL_ARTICLES } from '../constants/content';

const Blogs = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<main>
			<section className='relative h-[400px] w-full text-center'>
				<img src={imgtest} alt='imgtest' className='absolute h-[400px] w-full object-cover' />
				<div className='relative z-20 mx-auto flex max-w-7xl flex-col gap-4 px-8 pt-[150px] sm:flex-row sm:gap-0'>
					<div className='w-full text-5xl sm:w-1/2 md:w-[60%]'>
						<div className='flex h-full w-full items-center justify-center sm:justify-normal'>
							Blogs
						</div>
					</div>
					<div className='w-full sm:w-1/2 md:w-[40%]'>
						<div className='relative top-12 h-[180px] w-full overflow-hidden rounded-xl bg-white p-6 shadow-xl sm:top-24'>
							<div className='absolute left-0 top-0 h-full w-[6px] bg-orange-500' />
							<div className='flex h-full flex-col items-start justify-center gap-4'>
								<div>
									<ul className='flex items-center gap-1'>
										<li className='text-gray-700'>Home</li>
										<li className='text-orange-700'>
											<SingleArrow className='h-5' />
										</li>
										<li className='text-gray-700'>Articles</li>
										<li className='text-orange-700'>
											<SingleArrow className='h-5' />
										</li>
										<li className='text-gray-700'>Kitches Tips</li>
									</ul>
								</div>
								<div className='text-3xl'>Kitches Tips</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mx-auto max-w-7xl py-20'>
				<div className='px-8'>
					<ul className='flex flex-col gap-8'>
						{ALL_ARTICLES.map(article => (
							<li key={article.id} className='grid gap-4 sm:grid-cols-[2fr,1fr]'>
								<div className='flex h-full flex-col gap-2'>
									<h2 className='text-2xl'>{article.title}</h2>
									<div className='text-gray-700'>{article.description}</div>
									<div className='text-sm italic text-gray-500'>{article.date}</div>
									<div>
										<LinkTo to={article.link} className='text-orange-500'>
											<div className='flex items-center gap-1 font-semibold'>
												<span>Read More</span>
												<span>
													<Arrow className='h-4' />
												</span>
											</div>
										</LinkTo>
									</div>
								</div>
								<div className='flex items-center justify-center'>
									<img
										src={article.srcimg}
										alt={article.title}
										className='w-full max-w-xs rounded-xl'
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default Blogs;
