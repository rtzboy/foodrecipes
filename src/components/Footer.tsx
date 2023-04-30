const Footer = () => {
	return (
		<footer className='mt-auto flex justify-center'>
			<div className='flex flex-col items-center gap-2'>
				<div id='edamam-badge' data-color='white' className='bg-transparent'></div>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<div>
					<span>Made by </span>
					<span className='italic'>Jhoseph Poma </span>
					<span>JPDev</span>
				</div>
				<ul className='flex justify-center gap-8'>
					<li>link</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
