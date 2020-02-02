import styled from "styled-components";

export const LayoutSmall = styled.div`
  width: ${props => props.theme.grid.fullPageFormWidth};
  margin: ${props => props.theme.spacing.large} auto
    ${props => props.theme.spacing.default};
`;

export const LayoutFull = styled.div`
  width: ${props => props.theme.grid.maxWidth};
  margin: 0 auto;
`;
