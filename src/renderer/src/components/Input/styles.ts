import { styled } from "styled-components";

export const Container = styled.input`
  width: 500px;
  padding: 10px;
  border-radius: 6px;
  box-shadow: none;
  margin: 2px;

  &:focus {
    border-color: blue;
  }

  @media (max-width: 840px) {
    width: 300px;
  }
`;
