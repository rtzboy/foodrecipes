import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import XMark from './icons/XMark';

type ModalProps = {
	onClose: () => void;
	children?: JSX.Element;
};

const Modal = ({ onClose, children }: ModalProps) => {
	useEffect(() => {
		const evtEscapeClose = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') onClose();
		};

		document.body.classList.add('overflow-y-hidden');
		document.addEventListener('keyup', evtEscapeClose);
		return () => {
			document.body.classList.remove('overflow-y-hidden');
			document.removeEventListener('keyup', evtEscapeClose);
		};
	}, []);

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-[999] flex justify-center bg-black/80 p-4'
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1, transition: { type: 'spring' } }}
				exit={{ opacity: 0, scale: 0.5 }}
				className='relative flex items-center overflow-auto rounded-xl'
			>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1.2 } }}
					onClick={onClose}
					className='fixed right-4 top-4 z-[100] rounded-lg border border-slate-gray bg-whisper-blue hover:bg-white md:right-6 md:top-6'
				>
					<span className='hover:text-slate-950 block p-1 text-gray'>
						<XMark className='h-6' />
					</span>
				</motion.button>
				{children}
			</motion.div>
		</motion.div>,
		document.getElementById('portal') as HTMLElement
	);
};

export default Modal;
