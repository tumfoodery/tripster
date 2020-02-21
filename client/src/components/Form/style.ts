import styled from "styled-components";
import { spacingDefault, fontSmall } from "style/themeFunctions";

export const FormContainer = styled.form`
  a {
    font-size: ${fontSmall};
  }

  > *:not(img) {
    width: 100%;
    display: block;
    margin-bottom: ${spacingDefault};
  }

  img {
    width: 20px;
  }

  h1,
  a,
  span,
  div {
    text-align: center;
  }
`;
