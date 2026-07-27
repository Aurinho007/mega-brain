import { Container, Image, Label } from './styles';
import logoIcon from '../../../assets/images/emptyList.svg';

const EmptyList = () => {
	return (
		<Container>
			<Image src={logoIcon} />
			<Label>Adicione uma categoria e começe a usar!</Label>
		</Container>
	);
};

export default EmptyList;
