import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const ButtonContainer = styled.button`
  border: ${props => props.theme.spacing.border} solid
    ${props => props.theme.color.secondary};
  border-radius: ${props => props.theme.spacing.borderRadius};
  padding: ${props => props.theme.spacing.default};
  background: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.buttonText};

  &:hover {
    cursor: pointer;
  }
`;

export default function Button(prop: any) {
  const { onClick = noop, children = "", ...rest } = prop;
  return (
    <ButtonContainer onClick={e => onClick(e)} {...rest}>
      {children}
    </ButtonContainer>
  );
}
