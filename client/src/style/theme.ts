import { DefaultTheme, createGlobalStyle } from "styled-components";

export const theme: DefaultTheme = {
  color: {
    background: "#FFFFFF",
    link: "#7f5af0",
    buttonText: "#fffffe",
    text: "#000",
    secondary: "#7f5af0"
  },
  grid: {
    maxWidth: "1600px",
    fullPageFormWidth: "300px"
  },
  spacing: {
    default: "10px",
    borderRadius: "4px",
    border: "1px",
    large: "60px"
  },
  font: {
    small: "12px",
    medium: "14px"
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
