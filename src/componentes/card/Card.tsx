import { useCallback } from 'react';
import { Card } from '../../types';
import {
	Bar,
	Container,
	FillBar,
	Header,
	Label,
	Legend,
	Line,
	Menu,
	Title,
	Value,
	ValueContinerLeft,
	ValueContinerRight,
} from './styles';

const Card = (card: Card) => {
	const { id, name, total, used } = card;

	const formatValue = useCallback((value: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}, []);

	return (
		<Container>
			<Header>
				<Title>{name}</Title>
				<Menu>...</Menu>
			</Header>
			<Line>
				<ValueContinerLeft>
					<Value>{formatValue(used)}</Value>
					<Label>Utilizado</Label>
				</ValueContinerLeft>
				<ValueContinerRight>
					<Value>{formatValue(total - used)}</Value>
					<Label>Disponível</Label>
				</ValueContinerRight>
			</Line>
			<Bar>
				<FillBar conclusionPercent={(used / total) * 100}></FillBar>
			</Bar>
			<Legend>{`Total: ${formatValue(total)}`}</Legend>
		</Container>
	);
};

export default Card;
