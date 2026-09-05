import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type MouseEvent as ReactMouseEvent,
} from 'react';
import Service from '../../service';
import { ICard } from '../../types';
import { MoreIcon, ReceiptIcon, ResetIcon, TrashIcon } from '../icons/Icons';
import {
	ActionMenu,
	ActionOption,
	Bar,
	Container,
	FillBar,
	Footer,
	Header,
	IconBadge,
	Label,
	Legend,
	Line,
	MenuButton,
	MenuWrapper,
	PercentTag,
	StatusLevel,
	Title,
	TitleGroup,
	Value,
	ValueContinerLeft,
	ValueContinerRight,
	ValueHighlight,
} from './styles';

type CardProps = {
	card: ICard;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAddSpent: React.Dispatch<React.SetStateAction<boolean>>;
};

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

export const getStatus = (percent: number): StatusLevel => {
	if (percent >= 100) return 'danger';
	if (percent >= 75) return 'warning';
	return 'success';
};

const Card = (props: CardProps) => {
	const { id, name, total, used } = props.card;
	const { setRefresh, setShowAddSpent } = props;
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const formatValue = useCallback((value: number) => currencyFormatter.format(value), []);

	useEffect(() => {
		if (!showMenu) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setShowMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showMenu]);

	const handleDelete = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm(
			`Excluir a categoria "${name}"? Essa ação não pode ser desfeita.`
		);

		if (confirmed) {
			Service.deleteItem(id);
			setRefresh(true);
		}
	};

	const handleRestart = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm(
			`Reiniciar os gastos de "${name}"? O valor utilizado voltará para R$ 0,00.`
		);

		if (confirmed) {
			Service.resetItem(id);
			setRefresh(true);
		}
	};

	const rawPercent = total > 0 ? (used / total) * 100 : 0;
	const percent = Math.min(Math.max(rawPercent, 0), 100);
	const status = getStatus(rawPercent);

	return (
		<Container>
			<Header>
				<TitleGroup>
					<IconBadge $status={status}>
						<ReceiptIcon size={16} />
					</IconBadge>
					<Title>{name}</Title>
				</TitleGroup>
				<MenuWrapper ref={menuRef}>
					<MenuButton
						type="button"
						onClick={() => setShowMenu((prev) => !prev)}
						aria-haspopup="menu"
						aria-expanded={showMenu}
						aria-label={`Mais opções de ${name}`}
					>
						<MoreIcon size={18} />
					</MenuButton>
					{showMenu && (
						<ActionMenu role="menu">
							<ActionOption role="menuitem" onClick={() => setShowAddSpent(true)}>
								<ReceiptIcon size={15} />
								Novo gasto
							</ActionOption>
							<ActionOption role="menuitem" onClick={handleRestart}>
								<ResetIcon size={15} />
								Reiniciar gastos
							</ActionOption>
							<ActionOption role="menuitem" $danger onClick={handleDelete}>
								<TrashIcon size={15} />
								Excluir categoria
							</ActionOption>
						</ActionMenu>
					)}
				</MenuWrapper>
			</Header>

			<Line>
				<ValueContinerLeft>
					<Value>{formatValue(used)}</Value>
					<Label>Utilizado</Label>
				</ValueContinerLeft>
				<ValueContinerRight>
					<ValueHighlight $status={status}>{formatValue(Math.max(total - used, 0))}</ValueHighlight>
					<Label>Disponível</Label>
				</ValueContinerRight>
			</Line>

			<Bar>
				<FillBar $conclusionPercent={percent} $status={status} />
			</Bar>

			<Footer>
				<Legend>{`Limite: ${formatValue(total)}`}</Legend>
				<PercentTag $status={status}>{`${Math.round(rawPercent)}%`}</PercentTag>
			</Footer>
		</Container>
	);
};

export default Card;
