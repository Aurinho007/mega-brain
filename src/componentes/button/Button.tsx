import { PrimaryButton, SecondaryButton } from './styles';

type ButtonProps = {
	label: string;
	onPress: () => void;
	type: 'primary' | 'secondary';
};

const Button = (props: ButtonProps) => {
	const { label, onPress, type } = props;

	if (type === 'secondary') {
		return <SecondaryButton onClick={onPress}>{label}</SecondaryButton>;
	}

	return <PrimaryButton onClick={onPress}>{label}</PrimaryButton>;
};

export default Button;
