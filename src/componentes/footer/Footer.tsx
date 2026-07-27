import Service from '../../service';
import Button from '../button/Button';
import { ButtonGroup, Container } from './styles';

type FooterProps = {
	setShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAddSpent: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({ setShowAddItem, setShowAddSpent }: FooterProps) => {
	const hasSomeItem: boolean = Service.getAllItens().length > 0;

	return (
		<Container>
			{hasSomeItem ? (
				<ButtonGroup>
					<Button label="Nova categoria" type="secondary" onPress={() => setShowAddItem(true)} />
					<Button label="Novo gasto" type="primary" onPress={() => setShowAddSpent(true)} />
				</ButtonGroup>
			) : (
				<Button label="Nova categoria" type="primary" onPress={() => setShowAddItem(true)} />
			)}
		</Container>
	);
};

export default Footer;
