import { motion } from 'framer-motion';
import { useEffect } from 'react';
import bgarticleimg from '../assets/bgarticle.jpg';
import Footer from '../components/Footer';
import LinkTo from '../components/LinkTo';
import SectionWrapper from '../components/SectionWrapper';
import Arrow from '../components/icons/Arrow';
import SingleArrow from '../components/icons/SingleArrow';
import { ALL_ARTICLES } from '../constants/content';
import { staggerContainer, textMotion } from '../constants/motionAnimations';

const Blogs = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		document.title = 'Plate Explorer | Articles';
	}, []);

	return (
		<main>
			<SectionWrapper className='relative h-[400px] w-full text-center'>
				<img
					src={bgarticleimg}
					alt='imgtest'
					className='absolute h-[400px] w-full object-cover opacity-60'
				/>
				<div className='relative z-20 mx-auto flex max-w-7xl flex-col gap-4 px-8 pt-[150px] sm:flex-row sm:gap-0'>
					<div className='w-full text-4xl sm:w-1/2 sm:text-5xl md:w-[60%]'>
						<motion.h2
							variants={textMotion('left')}
							className='flex h-full w-full items-center justify-center font-space_grotesk font-semibold sm:justify-normal'
						>
							Articles
						</motion.h2>
					</div>
					<motion.div variants={textMotion('right')} className='w-full sm:w-1/2 md:w-[40%]'>
						<div className='relative top-12 h-[180px] w-full overflow-hidden rounded-xl bg-white p-6 shadow-xl sm:top-24'>
							<div className='bg-orange-500 absolute left-0 top-0 h-full w-[6px]' />
							<div className='flex h-full flex-col items-start justify-center gap-4 font-space_grotesk font-semibold'>
								<div>
									<ul className='flex items-center gap-1'>
										<li className='text-gray'>Home</li>
										<li className='text-orange'>
											<SingleArrow className='h-5' />
										</li>
										<li className='text-gray'>Articles</li>
										<li className='text-orange'>
											<SingleArrow className='h-5' />
										</li>
										<li className='text-gray'>Kitches Tips</li>
									</ul>
								</div>
								<div className='text-3xl'>Kitches Tips</div>
							</div>
						</div>
					</motion.div>
				</div>
			</SectionWrapper>
			<SectionWrapper className='mx-auto max-w-7xl py-20'>
				<div className='px-8'>
					<motion.ul variants={staggerContainer(0.3)} className='flex flex-col gap-8'>
						{ALL_ARTICLES.map(article => (
							<motion.li
								variants={textMotion('left')}
								key={article.id}
								className='grid gap-4 sm:grid-cols-[2fr,1fr]'
							>
								<div className='flex h-full flex-col gap-2'>
									<h2 className='font-space_grotesk text-2xl font-semibold'>{article.title}</h2>
									<div className='font-inter leading-relaxed text-gray'>{article.description}</div>
									<div className='text-sm italic text-slate-gray'>{article.date}</div>
									<div>
										<LinkTo to={article.link} className='inline-block text-orange'>
											<div className='group flex items-center gap-1 font-semibold'>
												<span>Read More</span>
												<span>
													<Arrow className='h-4 group-hover:animate-bounce' />
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
							</motion.li>
						))}
					</motion.ul>
				</div>
			</SectionWrapper>
			<Footer />
		</main>
	);
};

export default Blogs;
