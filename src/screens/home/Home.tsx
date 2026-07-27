import Card from '../../componentes/card/Card';
import Footer from '../../componentes/footer/Footer';
import Header from '../../componentes/header/Header';
import { Container, Content, Title } from './styles';

const Home = () => {
	return (
		<Container>
			<Header />
			<Title>Meus Gastos</Title>
			<Content>
				<Card id={1} name="Alimentação" total={1000} used={200} />
			</Content>
			<Footer />
		</Container>
	);
};

export default Home;
