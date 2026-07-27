import { useCallback, useState, type MouseEvent } from 'react';
import Service from '../../service';
import { ICard } from '../../types';
import {
	ActionMenu,
	ActionOption,
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

type CardProps = {
	card: ICard;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = (props: CardProps) => {
	const { id, name, total, used } = props.card;
	const { setRefresh } = props;
	const [showMenu, setShowMenu] = useState(false);

	const formatValue = useCallback((value: number) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		}).format(value);
	}, []);

	const handleDelete = (event?: MouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm('Deseja apagar este item?');

		if (confirmed) {
			Service.deleteItem(id);
			setRefresh(true);
		}
	};

	const handleRestart = (event?: MouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm('Deseja reiniciar este item?');

		if (confirmed) {
			Service.editItem(id, 0);
			setRefresh(true);
		}
	};

	const getPercent = () => {
		const percent = (used / total) * 100;

		if (percent > 100) return 100;

		return percent;
	};

	return (
		<Container>
			<Header>
				<Title>{name}</Title>
				<div style={{ position: 'relative' }}>
					<Menu onClick={() => setShowMenu((prev) => !prev)}>...</Menu>
					{showMenu && (
						<ActionMenu>
							<ActionOption
								onClick={(event) => {
									handleDelete(event);
								}}
							>
								Apagar
							</ActionOption>
							<ActionOption
								onClick={(event) => {
									handleRestart(event);
								}}
							>
								Reiniciar
							</ActionOption>
						</ActionMenu>
					)}
				</div>
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
				<FillBar conclusionPercent={getPercent()}></FillBar>
			</Bar>
			<Legend>{`Total: ${formatValue(total)}`}</Legend>
		</Container>
	);
};

export default Card;
