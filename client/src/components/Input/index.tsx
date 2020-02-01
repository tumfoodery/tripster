import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
  background: transparent;
  padding: ${props => props.theme.spacing.default};
`;

export default function Input(prop: any) {
  const { placeholder = "", onChange = noop, ...rest } = prop;
  return (
    <InputContainer
      placeholder={placeholder}
      onChange={e => onChange(e)}
      {...rest}
    />
  );
}
