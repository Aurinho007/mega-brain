import { useEffect, useState } from 'react';
import EmptyList from '../../componentes/emptyList/EmptyList';
import Footer from '../../componentes/footer/Footer';
import Header from '../../componentes/header/Header';
import Service from '../../service';
import AddItem from '../addItem/AddItem';
import { Container, Content, Title } from './styles';
import Card from '../../componentes/card/Card';
import { ICard } from '../../types';
import AddSpent from '../addSpent/AddSpent';

const Home = () => {
	const [allCards, setAllCards] = useState<ICard[]>([]);
	const [refresh, setRefresh] = useState<boolean>(true);

	const [showAddItem, setShowAddItem] = useState<boolean>(false);
	const [showAddSpent, setShowAddSpent] = useState<boolean>(false);

	useEffect(() => {
		setAllCards(Service.getAllItens());
	}, []);

	useEffect(() => {
		if (refresh) {
			setAllCards(Service.getAllItens());
			setRefresh(false);
		}
	}, [refresh]);

	const renderContent = () => {
		if (allCards.length === 0) {
			return <EmptyList />;
		}

		return (
			<>
				<Title>Meus Gastos</Title>
				<Content>
					{allCards.map((item) => {
						return <Card card={item} setRefresh={setRefresh} />;
					})}
				</Content>
			</>
		);
	};

	return (
		<Container>
			<Header />
			{renderContent()}
			<Footer setShowAddItem={setShowAddItem} setShowAddSpent={setShowAddSpent} />
			<AddItem show={showAddItem} setShow={setShowAddItem} setRefresh={setRefresh} />
			<AddSpent show={showAddSpent} setShow={setShowAddSpent} setRefresh={setRefresh} />
		</Container>
	);
};

export default Home;
