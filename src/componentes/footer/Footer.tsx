import Button from '../button/Button';
import { Container } from './styles';

const Footer = () => {
	return (
		<Container>
			<Button label="Novo gasto" onPress={() => console.log('Iniciar pressionado')} />
		</Container>
	);
};

export default Footer;
