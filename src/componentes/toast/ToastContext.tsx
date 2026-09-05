import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CheckIcon, AlertIcon } from '../icons/Icons';
import { IconBadge, Message, Toast, Viewport } from './styles';

export type ToastType = 'success' | 'danger';

type ToastItem = {
	id: string;
	message: string;
	type: ToastType;
	leaving: boolean;
};

type ToastContextValue = {
	showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

const DISPLAY_DURATION = 3200;
const EXIT_DURATION = 200;

type ToastProviderProps = {
	children: ReactNode;
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastItem[]>([]);

	const showToast = useCallback((message: string, type: ToastType = 'success') => {
		const id = uuidv4();
		setToasts((prev) => [...prev, { id, message, type, leaving: false }]);

		window.setTimeout(() => {
			setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, leaving: true } : toast)));
		}, DISPLAY_DURATION - EXIT_DURATION);

		window.setTimeout(() => {
			setToasts((prev) => prev.filter((toast) => toast.id !== id));
		}, DISPLAY_DURATION);
	}, []);

	const contextValue = useMemo(() => ({ showToast }), [showToast]);

	return (
		<ToastContext.Provider value={contextValue}>
			{children}
			<Viewport aria-live="polite" aria-atomic="true">
				{toasts.map((toast) => (
					<Toast key={toast.id} $type={toast.type} $leaving={toast.leaving} role="status">
						<IconBadge $type={toast.type}>
							{toast.type === 'success' ? <CheckIcon size={14} /> : <AlertIcon size={14} />}
						</IconBadge>
						<Message>{toast.message}</Message>
					</Toast>
				))}
			</Viewport>
		</ToastContext.Provider>
	);
};

export const useToast = (): ToastContextValue => {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error('useToast precisa ser usado dentro de um ToastProvider');
	}

	return context;
};
