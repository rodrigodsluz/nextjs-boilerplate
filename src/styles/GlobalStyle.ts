import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.white};
      color: ${theme.colors.darkGrey};
      font-family: ${theme.fonts.family.default};
      font-size: ${theme.fonts.sizes.medium};

      overflow-x: hidden;

      /* Scrollbar styles */
      &::-webkit-scrollbar {
        width: 0.5em;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: ${theme.colors.darkGrey};
      }

      &::-webkit-scrollbar-thumb {
        outline: 1px solid ${theme.colors.lightGreen};

        border-radius: 10px;
        background-image: linear-gradient(
          to bottom,
          ${theme.colors.blue} 60%,
          #242424
        );
        outline: 1px solid ${theme.colors.lightGrey};
      }
    }

    ol,
    li {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}
`;

export default GlobalStyle;
