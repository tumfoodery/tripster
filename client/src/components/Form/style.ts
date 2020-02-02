import styled from "styled-components";

export const FormContainer = styled.form`
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
