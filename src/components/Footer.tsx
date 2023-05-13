import Facebook from './icons/socialmedia/Facebook';
import Github from './icons/socialmedia/Github';
import Instagram from './icons/socialmedia/Instagram';
import Linkedin from './icons/socialmedia/Linkedin';

const Footer = () => {
	return (
		<footer className='bg-white py-2'>
			<section className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 p-4 md:flex-row'>
				<div className=''>
					<a href='https://www.edamam.com' target='_blank' rel='noreferrer'>
						<img src='https://developer.edamam.com/images/white.png' alt='edaman' />
					</a>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<div>
						<span>Get in touch</span>
					</div>
					<ul className='flex justify-center gap-8'>
						{SOCIAL_LINKS.map(link => (
							<li key={link.id}>
								<a href={link.link} target='_blank' rel='noreferrer'>
									{link.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</footer>
	);
};

const SOCIAL_LINKS = [
	{
		id: 1,
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/jpomadev/',
		icon: <Linkedin className='h-7' />
	},
	{
		id: 2,
		name: 'Github',
		link: 'https://github.com/rtzboy',
		icon: <Github className='h-7' />
	},
	{
		id: 3,
		name: 'Facebook',
		link: 'https://www.facebook.com/joseph.22.12/',
		icon: <Facebook className='h-7' />
	},
	{
		id: 4,
		name: 'Instagram',
		link: 'https://www.instagram.com/jhoseph2212/',
		icon: <Instagram className='h-7' />
	}
];

export default Footer;
