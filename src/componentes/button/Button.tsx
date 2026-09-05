import type { ReactNode } from 'react';
import { PrimaryButton, SecondaryButton } from './styles';

type ButtonProps = {
	label: string;
	onPress: () => void;
	type: 'primary' | 'secondary';
	icon?: ReactNode;
	fullWidth?: boolean;
	disabled?: boolean;
};

const Button = (props: ButtonProps) => {
	const { label, onPress, type, icon, fullWidth = true, disabled = false } = props;

	if (type === 'secondary') {
		return (
			<SecondaryButton type="button" onClick={onPress} $fullWidth={fullWidth} disabled={disabled}>
				{icon}
				{label}
			</SecondaryButton>
		);
	}

	return (
		<PrimaryButton type="button" onClick={onPress} $fullWidth={fullWidth} disabled={disabled}>
			{icon}
			{label}
		</PrimaryButton>
	);
};

export default Button;
