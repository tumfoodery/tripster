import React from "react";
import styled from "styled-components";
import { noop } from "../../utils/fn";

const ButtonContainer = styled.button`
  border: 1px solid;
`;

export default function Button(prop: { onClick?: Function; children: any }) {
  const { onClick = noop, children = "" } = prop;
  return (
    <ButtonContainer onClick={e => onClick(e)}>{children}</ButtonContainer>
  );
}
