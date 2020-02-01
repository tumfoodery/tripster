import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    background: "#f8f5f2",
    link: "#078080",
    text: "#232323",
    secondary: "#f45d48"
  },
  grid: {
    maxWidth: "1600px"
  },
  spacing: {
    default: "10px",
    borderRadius: "2px",
    border: "1px"
  },
  font: {
    small: "12px"
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${props => props.theme.color.text};
    background: ${props => props.theme.color.background};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.link};
  }
`;
