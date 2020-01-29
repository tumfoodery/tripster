import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  border: none;
  border-bottom: 1px solid;
`;

export default function Input(prop: { placeholder: string }) {
  const { placeholder } = prop;
  return <InputContainer placeholder={placeholder} />;
}
