import styled from "styled-components";

export const InputContainer = styled.label`
  font-size: ${props => props.theme.font.medium};
  input {
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.secondary};
    background: transparent;
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.color.background}
      inset;
    outline: none;
    padding: ${props => props.theme.spacing.default} 0;
    width: 100%;
  }
`;
