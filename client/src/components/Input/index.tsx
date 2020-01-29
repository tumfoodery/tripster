import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid;
`;

export default function Input(prop: {
  placeholder?: string;
  onChange?: Function;
}) {
  const { placeholder = "", onChange = noop } = prop;
  return (
    <InputContainer placeholder={placeholder} onChange={e => onChange(e)} />
  );
}
