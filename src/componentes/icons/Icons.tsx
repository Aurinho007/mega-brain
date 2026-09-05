// Conjunto de ícones em SVG puro (sem dependências externas), no estilo
// "outline" de 24x24. Todos aceitam `color` para herdar cores do tema.

export type IconProps = {
	size?: number;
	color?: string;
	strokeWidth?: number;
};

export const SunIcon = ({ size = 20, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" r="4.5" stroke={color} strokeWidth={strokeWidth} />
		<g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round">
			<line x1="12" y1="1.5" x2="12" y2="4" />
			<line x1="12" y1="20" x2="12" y2="22.5" />
			<line x1="1.5" y1="12" x2="4" y2="12" />
			<line x1="20" y1="12" x2="22.5" y2="12" />
			<line x1="4.5" y1="4.5" x2="6.2" y2="6.2" />
			<line x1="17.8" y1="17.8" x2="19.5" y2="19.5" />
			<line x1="4.5" y1="19.5" x2="6.2" y2="17.8" />
			<line x1="17.8" y1="6.2" x2="19.5" y2="4.5" />
		</g>
	</svg>
);

export const MoonIcon = ({ size = 20, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const MoreIcon = ({ size = 20, color = 'currentColor' }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="5" r="1.8" fill={color} />
		<circle cx="12" cy="12" r="1.8" fill={color} />
		<circle cx="12" cy="19" r="1.8" fill={color} />
	</svg>
);

export const CloseIcon = ({ size = 20, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line x1="5" y1="5" x2="19" y2="19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<line x1="19" y1="5" x2="5" y2="19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const PlusIcon = ({ size = 20, color = 'currentColor', strokeWidth = 2.2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const TrashIcon = ({ size = 18, color = 'currentColor', strokeWidth = 1.8 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4 7h16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<path
			d="M9 7V4.8C9 4.36 9.36 4 9.8 4h4.4c.44 0 .8.36.8.8V7"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6 7l.8 12.2c.05.98.86 1.8 1.85 1.8h6.7c.99 0 1.8-.82 1.85-1.8L18 7"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<line x1="10" y1="11" x2="10" y2="17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<line x1="14" y1="11" x2="14" y2="17" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const ResetIcon = ({ size = 18, color = 'currentColor', strokeWidth = 1.8 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.6 12a7.4 7.4 0 1 1 2.4 5.47" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<path d="M4.4 16.8v-4.2h4.2" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const EditIcon = ({ size = 18, color = 'currentColor', strokeWidth = 1.8 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M15.7 4.3a1.9 1.9 0 0 1 2.7 0l1.3 1.3a1.9 1.9 0 0 1 0 2.7L8.9 19.1l-4.4.9.9-4.4L15.7 4.3Z"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinejoin="round"
		/>
		<line x1="14" y1="6" x2="18" y2="10" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const ReceiptIcon = ({ size = 18, color = 'currentColor', strokeWidth = 1.8 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6 3h12v17.2c0 .5-.55.8-.98.55l-1.77-1.05a1 1 0 0 0-1 0l-1.5.9a1 1 0 0 1-1 0l-1.5-.9a1 1 0 0 0-1 0l-1.5.9a1 1 0 0 1-1 0l-1.5-.9a1 1 0 0 0-1 0L5 20.75c-.43.25-.98-.05-.98-.55V4a1 1 0 0 1 1-1Z"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinejoin="round"
		/>
		<line x1="8.5" y1="8" x2="15.5" y2="8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<line x1="8.5" y1="11.5" x2="15.5" y2="11.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const ChevronDownIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6 9l6 6 6-6" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export const WalletIcon = ({ size = 32, color = 'currentColor', strokeWidth = 1.7 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M4 8.2A2.7 2.7 0 0 1 6.7 5.5h10.6A2.7 2.7 0 0 1 20 8.2"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
		/>
		<rect x="3" y="8" width="18" height="11.5" rx="2.6" stroke={color} strokeWidth={strokeWidth} />
		<path d="M14.5 13.75a1 1 0 1 0 0 .01" stroke={color} strokeWidth={strokeWidth * 1.4} strokeLinecap="round" />
	</svg>
);

export const StackIcon = ({ size = 40, color = 'currentColor', strokeWidth = 1.6 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="9" y="14" width="20" height="16" rx="4.5" stroke={color} strokeWidth={strokeWidth} opacity="0.45" />
		<rect x="13" y="8.5" width="20" height="16" rx="4.5" stroke={color} strokeWidth={strokeWidth} />
		<line x1="18" y1="14.5" x2="28" y2="14.5" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<line x1="18" y1="18.8" x2="24" y2="18.8" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
	</svg>
);

export const AlertIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
		<line x1="12" y1="7.5" x2="12" y2="13" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
		<circle cx="12" cy="16.3" r="1" fill={color} />
	</svg>
);

export const CheckIcon = ({ size = 16, color = 'currentColor', strokeWidth = 2 }: IconProps) => (
	<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
		<path
			d="M8 12.3l2.5 2.5L16 9.3"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
