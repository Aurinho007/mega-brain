import { Container, Content, Logo, LogoContainer, SubTitle, Title, TitleContainer } from './styles';
import logoIcon from '../../assets/images/logoIcon.png';

const Header = () => {
	return (
		<Container>
			<Content>
				<LogoContainer>
					<Logo src={logoIcon} />
				</LogoContainer>
				<TitleContainer>
					<Title>Mega Brain</Title>
					<SubTitle>Seu gestor financeiro</SubTitle>
				</TitleContainer>
			</Content>
		</Container>
	);
};

export default Header;
