import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const InputContainer = styled.label`
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
  font-size: ${props => props.theme.font.small};
`;

export default function Input(prop: any) {
  const { placeholder = "", onChange = noop, ...rest } = prop;
  return (
    <InputContainer>
      {placeholder}
      <br />
      <input onChange={e => onChange(e)} {...rest} data-lpignore="true" />
    </InputContainer>
  );
}
