import Service from '../../service';
import { PlusIcon, ReceiptIcon } from '../icons/Icons';
import { Bar, Segment, Wrapper } from './styles';

type FooterProps = {
	setShowAddItem: React.Dispatch<React.SetStateAction<boolean>>;
	setShowAddSpent: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer = ({ setShowAddItem, setShowAddSpent }: FooterProps) => {
	const hasSomeItem: boolean = Service.getAllItens().length > 0;

	return (
		<Wrapper>
			<Bar>
				<Segment
					type="button"
					$variant={hasSomeItem ? 'ghost' : 'primary'}
					onClick={() => setShowAddItem(true)}
				>
					<PlusIcon size={17} />
					Nova categoria
				</Segment>
				{hasSomeItem && (
					<Segment type="button" $variant="primary" onClick={() => setShowAddSpent(true)}>
						<ReceiptIcon size={17} />
						Novo gasto
					</Segment>
				)}
			</Bar>
		</Wrapper>
	);
};

export default Footer;
