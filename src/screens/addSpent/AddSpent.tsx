import { useEffect, useState } from 'react';
import Button from '../../componentes/button/Button';
import Modal from '../../componentes/modal/Modal';
import {
	ButtonGroup,
	FormItem,
	FormItemContainer,
	FormItemLabel,
	Select,
	SelectChevron,
	SelectWrapper,
} from '../../componentes/formField/styles';
import { ChevronDownIcon } from '../../componentes/icons/Icons';
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

		if (!onlyNumbers) {
			setValue('');
			return;
		}

		setValue(
			(Number(onlyNumbers) / 100).toLocaleString('pt-BR', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
		);
	};

	const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCategoryId(event.target.value);
	};

	const handlePressAddSpent = () => {
		if (!value) {
			alert('Informe o valor do gasto.');
			return;
		}

		if (!categoryId) {
			alert('Escolha uma categoria para continuar.');
			return;
		}

		const updated = Service.editItem(categoryId, Number(value.replace(/\./g, '').replace(',', '.')));
		setRefresh(true);
		setShow(false);
		setValue('');
		setCategoryId('');

		if (!updated) {
			alert('Não foi possível registrar o gasto. Tente novamente.');
		}
	};

	const handlePressGoBack = () => {
		setShow(false);
		setValue('');
		setCategoryId('');
	};

	return (
		<Modal show={show} onClose={handlePressGoBack} title="Novo gasto">
			<FormItemContainer>
				<FormItemLabel htmlFor="spent-value">Valor do gasto (R$)</FormItemLabel>
				<FormItem
					id="spent-value"
					value={value}
					onChange={handleValueChange}
					type="tel"
					inputMode="numeric"
					placeholder="0,00"
				/>
			</FormItemContainer>

			<FormItemContainer>
				<FormItemLabel htmlFor="spent-category">Categoria</FormItemLabel>
				<SelectWrapper>
					<Select id="spent-category" value={categoryId} onChange={handleCategoryChange}>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Select>
					<SelectChevron>
						<ChevronDownIcon size={16} />
					</SelectChevron>
				</SelectWrapper>
			</FormItemContainer>

			<ButtonGroup>
				<Button label="Cancelar" type="secondary" onPress={handlePressGoBack} />
				<Button label="Registrar gasto" type="primary" onPress={handlePressAddSpent} />
			</ButtonGroup>
		</Modal>
	);
};

export default AddSpent;
