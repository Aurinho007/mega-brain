import { useEffect, type MouseEvent as ReactMouseEvent, type ReactNode } from 'react';
import { CloseIcon } from '../icons/Icons';
import { Body, CloseButton, Content, Header, Overlay, Title } from './styles';

type ModalProps = {
	show: boolean;
	title: string;
	onClose: () => void;
	children: ReactNode;
};

const Modal = ({ show, title, onClose, children }: ModalProps) => {
	useEffect(() => {
		if (!show) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleKeyDown);
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = previousOverflow;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [show]);

	const stopPropagation = (event: ReactMouseEvent) => event.stopPropagation();

	return (
		<Overlay $show={show} onClick={onClose} aria-hidden={!show}>
			<Content
				$show={show}
				onClick={stopPropagation}
				role="dialog"
				aria-modal="true"
				aria-label={title}
			>
				<Header>
					<Title>{title}</Title>
					<CloseButton type="button" onClick={onClose} aria-label="Fechar">
						<CloseIcon size={18} />
					</CloseButton>
				</Header>
				<Body>{children}</Body>
			</Content>
		</Overlay>
	);
};

export default Modal;
