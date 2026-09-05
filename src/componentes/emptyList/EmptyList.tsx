import Button from '../button/Button';
import { PlusIcon, StackIcon } from '../icons/Icons';
import { Badge, Container, CtaWrapper, IllustrationWrapper, Label, Title } from './styles';

type EmptyListProps = {
	onAddCategory: () => void;
};

const EmptyList = ({ onAddCategory }: EmptyListProps) => {
	return (
		<Container>
			<IllustrationWrapper>
				<StackIcon size={44} />
				<Badge>
					<PlusIcon size={16} color="#FFFFFF" />
				</Badge>
			</IllustrationWrapper>
			<Title>Nenhuma categoria criada</Title>
			<Label>Crie categorias como Mercado, Lazer ou Transporte para começar a controlar seus gastos.</Label>
			<CtaWrapper>
				<Button
					label="Nova categoria"
					type="primary"
					fullWidth={false}
					icon={<PlusIcon size={17} />}
					onPress={onAddCategory}
				/>
			</CtaWrapper>
		</Container>
	);
};

export default EmptyList;
