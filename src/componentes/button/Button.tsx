import { PrimaryButton } from './styles';

type ButtonProps = {
	label: string;
	onPress: () => void;
};

const Button = (props: ButtonProps) => {
	return <PrimaryButton onClick={props.onPress}>{props.label}</PrimaryButton>;
};

export default Button;
