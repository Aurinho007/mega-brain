import Logo from '../logo/Logo';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { Actions, BrandGroup, Container, Content, SubTitle, Title, TitleContainer } from './styles';

const Header = () => {
	return (
		<Container>
			<Content>
				<BrandGroup>
					<Logo size={38} />
					<TitleContainer>
						<Title>Mega Brain</Title>
						<SubTitle>Seu gestor financeiro</SubTitle>
					</TitleContainer>
				</BrandGroup>
				<Actions>
					<ThemeToggle />
				</Actions>
			</Content>
		</Container>
	);
};

export default Header;
