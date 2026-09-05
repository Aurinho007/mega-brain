import { useEffect, useMemo, useState } from 'react';
import EmptyList from '../../componentes/emptyList/EmptyList';
import Footer from '../../componentes/footer/Footer';
import Header from '../../componentes/header/Header';
import Service from '../../service';
import AddItem from '../addItem/AddItem';
import {
	CardGrid,
	Container,
	Content,
	PageHeader,
	SummaryBar,
	SummaryCard,
	SummaryFillBar,
	SummaryFooter,
	SummaryFooterItem,
	SummaryHeader,
	SummaryHeaderText,
	SummaryIconBadge,
	SummaryLabel,
	SummaryPercentTag,
	SummaryTitleGroup,
	SummaryTotalValue,
	SummaryValue,
	Title,
	Toolbar,
} from './styles';
import Card, { getStatus } from '../../componentes/card/Card';
import Button from '../../componentes/button/Button';
import { PlusIcon, ReceiptIcon, WalletIcon } from '../../componentes/icons/Icons';
import { ICard } from '../../types';
import AddSpent from '../addSpent/AddSpent';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

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

	const summary = useMemo(() => {
		const totalLimit = allCards.reduce((acc, card) => acc + card.total, 0);
		const totalUsed = allCards.reduce((acc, card) => acc + card.used, 0);
		const rawPercent = totalLimit > 0 ? (totalUsed / totalLimit) * 100 : 0;

		return {
			totalLimit,
			totalUsed,
			totalAvailable: Math.max(totalLimit - totalUsed, 0),
			percent: Math.min(Math.max(rawPercent, 0), 100),
			rawPercent,
			status: getStatus(rawPercent),
		};
	}, [allCards]);

	const hasCards = allCards.length > 0;

	const renderContent = () => {
		if (!hasCards) {
			return <EmptyList onAddCategory={() => setShowAddItem(true)} />;
		}

		return (
			<>
				<SummaryCard aria-label="Resumo geral">
					<SummaryHeader>
						<SummaryTitleGroup>
							<SummaryIconBadge $status={summary.status}>
								<WalletIcon size={18} />
							</SummaryIconBadge>
							<SummaryHeaderText>
								<SummaryLabel>Limite total</SummaryLabel>
								<SummaryTotalValue>{currencyFormatter.format(summary.totalLimit)}</SummaryTotalValue>
							</SummaryHeaderText>
						</SummaryTitleGroup>
						<SummaryPercentTag $status={summary.status}>
							{`${Math.round(summary.rawPercent)}%`}
						</SummaryPercentTag>
					</SummaryHeader>

					<SummaryBar>
						<SummaryFillBar $conclusionPercent={summary.percent} $status={summary.status} />
					</SummaryBar>

					<SummaryFooter>
						<SummaryFooterItem>
							<SummaryLabel>Utilizado</SummaryLabel>
							<SummaryValue>{currencyFormatter.format(summary.totalUsed)}</SummaryValue>
						</SummaryFooterItem>
						<SummaryFooterItem $align="right">
							<SummaryLabel>Disponível</SummaryLabel>
							<SummaryValue $tone={summary.status}>
								{currencyFormatter.format(summary.totalAvailable)}
							</SummaryValue>
						</SummaryFooterItem>
					</SummaryFooter>
				</SummaryCard>

				<PageHeader>
					<Title>Minhas categorias</Title>
					<Toolbar>
						<Button
							label="Nova categoria"
							type="secondary"
							fullWidth={false}
							icon={<PlusIcon size={17} />}
							onPress={() => setShowAddItem(true)}
						/>
						<Button
							label="Novo gasto"
							type="primary"
							fullWidth={false}
							icon={<ReceiptIcon size={17} />}
							onPress={() => setShowAddSpent(true)}
						/>
					</Toolbar>
				</PageHeader>

				<CardGrid>
					{allCards.map((item) => (
						<Card key={item.id} card={item} setRefresh={setRefresh} setShowAddSpent={setShowAddSpent} />
					))}
				</CardGrid>
			</>
		);
	};

	return (
		<Container>
			<Header />
			<Content>{renderContent()}</Content>
			<Footer setShowAddItem={setShowAddItem} setShowAddSpent={setShowAddSpent} />
			<AddItem show={showAddItem} setShow={setShowAddItem} setRefresh={setRefresh} />
			<AddSpent show={showAddSpent} setShow={setShowAddSpent} setRefresh={setRefresh} />
		</Container>
	);
};

export default Home;
