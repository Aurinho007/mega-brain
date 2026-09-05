import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../componentes/button/Button';
import Modal from '../../componentes/modal/Modal';
import {
	ButtonGroup,
	FormItem,
	FormItemContainer,
	FormItemLabel,
} from '../../componentes/formField/styles';
import { ICard } from '../../types';
import Service from '../../service';
import { useToast } from '../../componentes/toast/ToastContext';

type AddItemProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
	editingItem?: ICard | null;
};

const AddItem = ({ show, setShow, setRefresh, editingItem = null }: AddItemProps) => {
	const [name, setName] = useState<string>('');
	const [total, setTotal] = useState<string>('');
	const isEditing = Boolean(editingItem);
	const { showToast } = useToast();

	useEffect(() => {
		if (!show) return;

		if (editingItem) {
			setName(editingItem.name);
			setTotal(editingItem.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
		} else {
			setName('');
			setTotal('');
		}
	}, [show, editingItem]);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = event.target.value;
		const formattedName = rawValue
			.replace(/\s+/g, ' ')
			.replace(/(^|\s)\S/g, (char) => char.toUpperCase());

		setName(formattedName);
	};

	const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const onlyNumbers = event.target.value.replace(/\D/g, '');

		if (!onlyNumbers) {
			setTotal('');
			return;
		}

		setTotal(
			(Number(onlyNumbers) / 100).toLocaleString('pt-BR', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
		);
	};

	const handlePressAddItem = () => {
		if (!name || !total) {
			showToast('Preencha o nome e o limite mensal da categoria.', 'danger');
			return;
		}

		const totalNumber = Number(total.replace(/\./g, '').replace(',', '.'));

		if (editingItem) {
			const updated = Service.updateItem(editingItem.id, { name: name.trim(), total: totalNumber });
			setRefresh(true);
			setShow(false);

			if (updated) {
				showToast('Categoria atualizada com sucesso.');
			} else {
				showToast('Já existe uma categoria com esse nome.', 'danger');
			}
			return;
		}

		const newItem: ICard = {
			id: uuidv4(),
			name: name.trim(),
			total: totalNumber,
			used: 0,
		};

		const addedItem = Service.createItem(newItem);
		setRefresh(true);
		setShow(false);
		setName('');
		setTotal('');

		if (addedItem) {
			showToast('Categoria criada com sucesso.');
		} else {
			showToast('Já existe uma categoria com esse nome.', 'danger');
		}
	};

	const handlePressGoBack = () => {
		setShow(false);
		setName('');
		setTotal('');
	};

	return (
		<Modal show={show} onClose={handlePressGoBack} title={isEditing ? 'Editar categoria' : 'Nova categoria'}>
			<FormItemContainer>
				<FormItemLabel htmlFor="item-name">Nome da categoria</FormItemLabel>
				<FormItem
					id="item-name"
					value={name}
					onChange={handleNameChange}
					placeholder="Ex: Mercado, Lazer, Transporte..."
					autoComplete="off"
				/>
			</FormItemContainer>

			<FormItemContainer>
				<FormItemLabel htmlFor="item-total">Limite mensal (R$)</FormItemLabel>
				<FormItem
					id="item-total"
					value={total}
					onChange={handleTotalChange}
					type="tel"
					inputMode="numeric"
					placeholder="0,00"
				/>
			</FormItemContainer>

			<ButtonGroup>
				<Button label="Cancelar" type="secondary" onPress={handlePressGoBack} />
				<Button
					label={isEditing ? 'Salvar alterações' : 'Criar categoria'}
					type="primary"
					onPress={handlePressAddItem}
				/>
			</ButtonGroup>
		</Modal>
	);
};

export default AddItem;
