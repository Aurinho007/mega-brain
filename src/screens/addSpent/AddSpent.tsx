import { useEffect, useState } from 'react';
import Button from '../../componentes/button/Button';
import {
	ButtonGroup,
	Container,
	Content,
	FormItem,
	FormItemContainer,
	FormItemLabel,
	Title,
} from '../addItem/styles';
import Service from '../../service';
import { ICard } from '../../types';

type AddSpentProps = {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddSpent = ({ show, setShow, setRefresh }: AddSpentProps) => {
	const [value, setValue] = useState<string>('');
	const [categoryId, setCategoryId] = useState<string>('');
	const [categories, setCategories] = useState<ICard[]>([]);

	useEffect(() => {
		if (!show) return;

		const allCategories = Service.getAllItens();
		setCategories(allCategories);
		if (allCategories.length > 0) {
			setCategoryId(allCategories[0].id);
		}
	}, [show]);

	const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const onlyNumbers = event.target.value.replace(/\D/g, '');
		setValue(onlyNumbers);
	};

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategoryId(event.target.value);
	};

	const handlePressAddSpent = () => {
		if (!categoryId) {
			alert('Selecione uma categoria');
			return;
		}

		const updated = Service.editItem(categoryId, Number(value));
		setRefresh(true);
		setShow(false);
		setValue('');
		setCategoryId('');

		if (!updated) {
			alert('Não foi possível atualizar o gasto');
		}
	};

	const handlePressGoBack = () => {
		setShow(false);
		setValue('');
		setCategoryId('');
	};

	return (
		<Container $show={show}>
			<Content $show={show}>
				<Title>Adicionar gasto</Title>

				<FormItemContainer>
					<FormItemLabel>Valor do gasto (R$)</FormItemLabel>
					<FormItem value={value} onChange={handleValueChange} type="tel" inputMode="numeric" />
				</FormItemContainer>

				<FormItemContainer>
					<FormItemLabel>Categoria</FormItemLabel>
					<select
						value={categoryId}
						onChange={handleCategoryChange}
						style={{
							height: 45,
							borderRadius: 30,
							border: 'none',
							backgroundColor: '#D0D4D8',
							padding: '0 16px',
							fontSize: 15,
							fontWeight: 600,
						}}
					>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</FormItemContainer>

				<ButtonGroup>
					<Button label="Voltar" type="secondary" onPress={handlePressGoBack} />
					<Button label="Adicionar" type="primary" onPress={handlePressAddSpent} />
				</ButtonGroup>
			</Content>
		</Container>
	);
};

export default AddSpent;
