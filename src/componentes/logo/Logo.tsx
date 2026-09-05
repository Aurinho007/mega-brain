// Marca do Mega Brain: um selo arredondado com uma linha ascendente,
// representando crescimento financeiro. É um SVG vetorial (não depende de
// nenhum arquivo de imagem) para ficar nítido em qualquer tamanho e tela,
// e mantém a cor de marca fixa nos dois temas — como a maioria dos logos.

type LogoProps = {
	size?: number;
};

const Logo = ({ size = 40 }: LogoProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		role="img"
		aria-label="Mega Brain"
	>
		<defs>
			<linearGradient id="mega-brain-logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
				<stop offset="0" stopColor="#6366F1" />
				<stop offset="1" stopColor="#8B5CF6" />
			</linearGradient>
		</defs>
		<rect width="48" height="48" rx="14" fill="url(#mega-brain-logo-gradient)" />
		<path
			d="M12 32.5V23L18 29.2l6-12.4 6 12.4 6-6.2v6.5"
			stroke="#FFFFFF"
			strokeWidth="3.2"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
		/>
		<circle cx="24" cy="16.8" r="2.1" fill="#FFFFFF" />
	</svg>
);

export default Logo;
