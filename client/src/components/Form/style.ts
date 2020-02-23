import styled from "styled-components";
import { spacingDefault, fontSmall } from "style/themeFunctions";

export const FormContainer = styled.form`
  a {
    font-size: ${fontSmall};
  }

  > * {
    width: 100%;
    display: block;
    margin-bottom: ${spacingDefault};
  }

  img {
    width: auto;
    margin: 0 auto;
    height: 30px;
    display: block;
  }

  h1,
  a {
    text-align: center;
  }
`;
