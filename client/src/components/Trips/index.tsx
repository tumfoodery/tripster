import React from "react";
import styled from "styled-components";

const TripsContainer = styled.div`
  width: ${props => props.theme.grid.maxWidth};
`;

export default function Trips() {
  return <TripsContainer>TRIPS</TripsContainer>;
}
