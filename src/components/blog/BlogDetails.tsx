import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ALL_ARTICLES } from '../../constants/content';
import Footer from '../Footer';
import LinkTo from '../LinkTo';
import SingleArrow from '../icons/SingleArrow';

const BlogDetails = () => {
	const { id } = useParams();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	const blogInfo = ALL_ARTICLES.find(blog => blog.id === id);

	return (
		<main>
			<section className='relative h-[400px] sm:h-[500px]'>
				<img
					src={blogInfo?.srcimg}
					alt=''
					className='absolute h-[400px] w-full object-cover sm:h-[500px]'
				/>
				<div className='relative z-30 mx-auto w-full max-w-7xl px-12 pt-[230px] sm:pt-[330px]'>
					<div className='relative w-full overflow-hidden rounded-xl bg-white p-6 shadow-xl sm:p-12'>
						<div className='absolute left-0 top-0 h-full w-[6px] bg-orange' />
						<div className='flex h-full flex-col items-start justify-center gap-8'>
							<div>
								<ul className='flex items-center gap-1'>
									<li className='text-gray'>Home</li>
									<li className='text-orange'>
										<SingleArrow className='h-5' />
									</li>
									<li className='text-gray'>
										<LinkTo to='/articles' className='hover:text-orange'>
											Kitches Tips
										</LinkTo>
									</li>
								</ul>
							</div>
							<div className='font-space_grotesk text-3xl font-semibold sm:text-3xl md:text-4xl'>
								{blogInfo?.title}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='mx-auto mt-[100px] w-full max-w-7xl'>
				<div className='flex flex-col gap-8 md:flex-row'>
					<div className='rounded-xl bg-whisper-blue p-8 md:w-[60%] lg:w-[70%]'>
						<p className='whitespace-pre-line text-justify font-inter leading-relaxed'>
							{blogInfo?.content}
						</p>
					</div>
					<div className='md:w-[40%] lg:w-[30%]'>
						<div className='sticky top-24 h-[50vh] px-2 md:px-4'>
							<h2 className='mb-4 font-space_grotesk text-3xl font-semibold'>Latest Post</h2>
							<ul className='flex flex-col gap-8'>
								{ALL_ARTICLES.map(article => (
									<li key={article.id} className='flex gap-4'>
										<div className='flex max-w-[150px] items-center justify-center'>
											<img src={article.srcimg} alt={article.title} className='w-full rounded-xl' />
										</div>
										<div className='flex h-full flex-col gap-2'>
											<LinkTo to={`/articles/${article.link}`} className='hover:text-orange'>
												<h2 className='font-space_grotesk text-base font-semibold'>
													{article.title}
												</h2>
											</LinkTo>
											<div className='text-sm italic text-gray'>{article.date}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default BlogDetails;
