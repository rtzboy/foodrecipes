import { useState } from 'react';
import { RecipeDetailsType } from '../types/recipeTypes';
import CheckMark from './icons/CheckMark';
import ChevronDown from './icons/ChevronDown';
import Clock from './icons/Clock';
import Dishtype from './icons/Dishtype';
import Fire from './icons/Fire';
import Fork from './icons/Fork';
import Globe from './icons/Globe';
import Source from './icons/Source';

type RecipeDetailsProps = {
	details: RecipeDetailsType;
};

const RecipeDetails = ({ details }: RecipeDetailsProps) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='grid max-w-7xl overflow-hidden rounded-2xl bg-white md:grid-cols-[1fr,1fr]'>
			<div className='relative flex items-center justify-center'>
				<img
					src={details.images.large?.url || details.images.regular?.url}
					alt=''
					className='relative z-40 h-full max-h-[400px] w-full max-w-[400px] object-cover md:max-h-[600px] md:max-w-[600px]'
				/>
				<img
					src={details.images.large?.url || details.images.regular?.url}
					alt=''
					className='absolute h-full w-full blur-[8px] transition-all duration-1000'
				/>
			</div>
			<div className='relative z-40 flex flex-col items-start gap-4 bg-white p-4 font-inter md:p-8'>
				<h2 className='max-w-[448px] font-space_grotesk text-2xl font-semibold md:text-3xl'>
					{details.label}
				</h2>
				<div className='flex items-center justify-center gap-1 text-orange'>
					<span className='px-[6px]'>
						<Fire className='h-6' />
					</span>
					<span>{details.calories.toFixed(2)} kcals</span>
				</div>
				<div className='text-blue-500 flex items-center justify-center gap-1 text-lightblue'>
					<span className='px-[6px]'>
						<Source className='h-6' />
					</span>
					<a
						href={details.url}
						target='_blank'
						rel='noreferrer'
						className='italic underline underline-offset-[3px] '
					>
						{details.source}
					</a>
				</div>
				<div className='flex items-center justify-center gap-1 text-gray'>
					<span className='px-[6px]'>
						<Clock className='h-6' />
					</span>
					<span>
						{!details.totalTime ? 'Unknow' : `${convertMinsToHrsMins(details.totalTime)} min`}
					</span>
				</div>
				<div className='flex items-center justify-center gap-1'>
					<span className='px-[6px]'>
						<Dishtype className='h-6' />
					</span>
					<span>{details.dishType?.join(' - ')}</span>
				</div>
				<div className='flex items-center justify-center gap-1 text-green'>
					<span className='px-[6px]'>
						<Globe className='h-6' />
					</span>
					<span>{details.cuisineType.join(' - ')}</span>
				</div>
				<div className='flex items-center justify-center gap-1'>
					<span className='text-black'>
						<Fork className='h-6' />
					</span>
					<span>{details.yield}</span>
				</div>
				<div className='inline-block rounded-xl bg-whisper-blue px-2 py-[2px] font-inter text-[13px] font-semibold italic tracking-wider text-gray'>
					{details.mealType.join('')}
				</div>
				<div className='w-full'>
					<div className='mb-4 inline-block'>
						<div className='flex items-center overflow-hidden rounded-lg border border-light-orange shadow-md shadow-orange/25'>
							<span className='px-4'>Ingredients</span>
							<span
								onClick={() => setOpen(!open)}
								className='inline-block cursor-pointer bg-light-orange px-2 py-[6px]'
							>
								<ChevronDown
									className={`h-5 transition-all duration-500 ${open ? 'rotate-180' : ''}`}
								/>
							</span>
						</div>
					</div>
					<div
						className={`relative overflow-auto transition-all duration-500 ${
							open ? 'visible h-[290px] opacity-100' : 'invisible h-0 opacity-0'
						}`}
					>
						<ul className={`flex flex-col flex-wrap rounded-xl bg-whisper-blue py-2`}>
							{details.ingredientLines.map((ingre, idx) => (
								<li
									key={idx}
									className='mx-2 flex items-center gap-2 border-b-[1px] border-b-slate-gray/30 py-[6px] last:border-b-0'
								>
									<span className='text-orange'>
										<CheckMark className='h-4' />
									</span>
									<span>{ingre}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div
					className={`text-sm italic text-lightblue transition-all duration-500 ${
						open ? 'visible opacity-100' : 'invisible opacity-0'
					}`}
				>
					Did you find the perfect recipe? Go the link below{' '}
					<span className='underline'>{details.source}</span>
				</div>
			</div>
		</div>
	);
};

const convertMinsToHrsMins = (mins: number) => {
	let hour = Math.floor(mins / 60);
	let min = mins % 60;
	let hours = hour < 10 ? '0' + hour : hour;
	let minutes = min < 10 ? '0' + min : min;
	return `${hours}:${minutes}`;
};

export default RecipeDetails;
