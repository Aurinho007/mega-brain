import { createGlobalStyle } from 'styled-components';
import regularFont from '../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-Regular.ttf';
import boldFont from '../assets/fonts/Hanken_Grotesk/static/HankenGrotesk-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Hanken Grotesk';
    src: url(${regularFont}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Hanken Grotesk';
    src: url(${boldFont}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }

  /* Reseta os estilos padrões */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Ajusta display para HTML5 */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* Reseta estilos de listas */
  ol, ul {
    list-style: none;
  }

  /* Reseta cotações */
  blockquote, q {
    quotes: none;
  }

  /* Configura tabelas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Configurações do body */
  html, body, #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    overflow-x: hidden;
    font-family: 'Hanken Grotesk';
  }

  #root {
    min-height: 100vh;
  }
`;
