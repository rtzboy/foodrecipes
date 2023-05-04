import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import XMark from './icons/XMark';

type ModalProps = {
	onClose?: () => void;
	children?: JSX.Element;
};

const Modal = ({ onClose, children }: ModalProps) => {
	useEffect(() => {
		document.body.classList.add('overflow-y-hidden');
		return () => document.body.classList.remove('overflow-y-hidden');
	}, []);

	return createPortal(
		<div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5'>
			<div className='relative'>
				<button
					onClick={onClose}
					className='absolute right-3 top-3 rounded-lg bg-white/70 hover:bg-white'
				>
					<span className='block p-1 text-gray-700 hover:text-slate-950'>
						<XMark className='h-6' />
					</span>
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('portal') as HTMLElement
	);
};

export default Modal;
