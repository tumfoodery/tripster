import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const FormContainer = styled.form`
  a {
    font-size: ${props => props.theme.font.small};
  }

  > * {
    width: 100%;
    display: block;
    margin-bottom: ${props => props.theme.spacing.default};
  }

  h1,
  a {
    text-align: center;
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
