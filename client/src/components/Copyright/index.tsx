import React from "react";
import styled from "styled-components";

const CopyrightContainer = styled.footer`
  font-size: ${props => props.theme.font.small};
  text-align: center;
`;

export default function Copyright() {
  return (
    <CopyrightContainer>
      {"Copyright © "}
      <a href="https://tripster.vip">Tripster</a> {new Date().getFullYear()}
      {"."}
    </CopyrightContainer>
  );
}
