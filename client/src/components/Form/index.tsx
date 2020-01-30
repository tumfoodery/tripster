import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const FormContainer = styled.form`
  width: 300px;
  margin: 0 auto;

  > * {
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.default};
  }
`;

export default function Form(prop: { onSubmit?: Function; children?: any }) {
  const { onSubmit = noop, children = "" } = prop;
  return (
    <FormContainer onSubmit={(e: React.FormEvent) => onSubmit(e)}>
      {children}
    </FormContainer>
  );
}
