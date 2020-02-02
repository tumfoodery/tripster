import styled from "styled-components";
import {
  spacingDefault,
  colorSecondary,
  colorBackground
} from "style/themeFunctions";

export const InputContainer = styled.label`
  font-size: ${props => props.theme.font.medium};
  input {
    border: none;
    border-bottom: 1px solid ${colorSecondary};
    background: transparent;
    -webkit-box-shadow: 0 0 0px 1000px ${colorBackground} inset;
    outline: none;
    padding: ${spacingDefault} 0;
    width: 100%;
  }
`;
