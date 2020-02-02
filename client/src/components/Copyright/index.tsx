import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CopyrightContainer = styled.footer`
  font-size: ${props => props.theme.font.small};
  text-align: center;
`;

export default function Copyright() {
  return (
    <CopyrightContainer>
      {"Copyright © "}
      <Link to="/">Tripster</Link> {new Date().getFullYear()}
      {"."}
    </CopyrightContainer>
  );
}
