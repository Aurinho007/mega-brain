import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type MouseEvent as ReactMouseEvent,
} from 'react';
import Service from '../../service';
import { ICard } from '../../types';
import { EditIcon, MoreIcon, ReceiptIcon, ResetIcon, TrashIcon } from '../icons/Icons';
import { useToast } from '../toast/ToastContext';
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
	onEdit: (card: ICard) => void;
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
	const { setRefresh, setShowAddSpent, onEdit } = props;
	const [showMenu, setShowMenu] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);
	const { showToast } = useToast();

	const formatValue = useCallback((value: number) => currencyFormatter.format(value), []);

	useEffect(() => {
		if (!showMenu) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
				setShowMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showMenu]);

	const handleToggleMenu = (event?: ReactMouseEvent<HTMLButtonElement | HTMLDivElement>) => {
		event?.stopPropagation();
		setShowMenu((prev) => !prev);
	};

	const handleCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== 'Enter' && event.key !== ' ') return;
		event.preventDefault();
		setShowMenu((prev) => !prev);
	};

	const handleAddSpent = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);
		setShowAddSpent(true);
	};

	const handleDelete = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm(
			`Excluir a categoria "${name}"? Essa ação não pode ser desfeita.`
		);

		if (confirmed) {
			const deleted = Service.deleteItem(id);
			setRefresh(true);

			if (deleted) {
				showToast('Categoria excluída com sucesso.');
			} else {
				showToast('Não foi possível excluir a categoria.', 'danger');
			}
		}
	};

	const handleEdit = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);
		onEdit(props.card);
	};

	const handleRestart = (event?: ReactMouseEvent<HTMLButtonElement>) => {
		event?.stopPropagation();
		setShowMenu(false);

		const confirmed = window.confirm(
			`Reiniciar os gastos de "${name}"? O valor utilizado voltará para R$ 0,00.`
		);

		if (confirmed) {
			const reseted = Service.resetItem(id);
			setRefresh(true);

			if (reseted) {
				showToast('Gastos reiniciados com sucesso.');
			} else {
				showToast('Não foi possível reiniciar os gastos.', 'danger');
			}
		}
	};

	const rawPercent = total > 0 ? (used / total) * 100 : 0;
	const percent = Math.min(Math.max(rawPercent, 0), 100);
	const status = getStatus(rawPercent);

	return (
		<Container ref={cardRef} onClick={handleToggleMenu} onKeyDown={handleCardKeyDown} tabIndex={0}>
			<Header>
				<TitleGroup>
					<IconBadge $status={status}>
						<ReceiptIcon size={16} />
					</IconBadge>
					<Title>{name}</Title>
				</TitleGroup>
				<MenuWrapper>
					<MenuButton
						type="button"
						onClick={handleToggleMenu}
						aria-haspopup="menu"
						aria-expanded={showMenu}
						aria-label={`Mais opções de ${name}`}
					>
						<MoreIcon size={18} />
					</MenuButton>
					{showMenu && (
						<ActionMenu role="menu">
							<ActionOption role="menuitem" onClick={handleAddSpent}>
								<ReceiptIcon size={15} />
								Novo gasto
							</ActionOption>
							<ActionOption role="menuitem" onClick={handleEdit}>
								<EditIcon size={15} />
								Editar categoria
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
