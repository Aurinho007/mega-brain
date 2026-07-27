import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../componentes/button/Button';
import {
	ButtonGroup,
	Container,
	Content,
	FormItem,
	FormItemContainer,
	FormItemLabel,
	Title,
} from './styles';
import { ICard } from '../../types';
import Service from '../../service';

type AddItemProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddItem = ({ show, setShow, setRefresh }: AddItemProps) => {
	const [name, setName] = useState<string>('');
	const [total, setTotal] = useState<string>('');

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = event.target.value;
		const formattedName = rawValue
			.replace(/\s+/g, ' ')
			.replace(/(^|\s)\S/g, (char) => char.toUpperCase());

		setName(formattedName);
	};

	const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const onlyNumbers = event.target.value.replace(/\D/g, '');
		setTotal(onlyNumbers);
	};

	const handlePressAddItem = () => {
		const newItem: ICard = {
			id: uuidv4(),
			name: name.trim(),
			total: Number(total),
			used: 0,
		};

		if (!name || !total) {
			alert('Preencha todos os campos');
			return;
		}

		const addedItem = Service.createItem(newItem);
		setRefresh(true);
		setShow(false);
		setName('');
		setTotal('');

		if (!addedItem) {
			alert('Essa categoria já existe');
			return;
		}

		// TODO alerta de sucesso
	};

	const handlePressGoBack = () => {
		setShow(false);
		setName('');
		setTotal('');
	};

	return (
		<Container $show={show}>
			<Content $show={show}>
				<Title>Adicionar categoria</Title>

				<FormItemContainer>
					<FormItemLabel>Nome</FormItemLabel>
					<FormItem value={name} onChange={handleNameChange} />
				</FormItemContainer>

				<FormItemContainer>
					<FormItemLabel>Valor limite mensal (R$)</FormItemLabel>
					<FormItem value={total} onChange={handleTotalChange} type="tel" inputMode="numeric" />
				</FormItemContainer>

				<ButtonGroup>
					<Button label="Voltar" type="secondary" onPress={handlePressGoBack} />
					<Button label="Adicionar" type="primary" onPress={handlePressAddItem} />
				</ButtonGroup>
			</Content>
		</Container>
	);
};

export default AddItem;
