import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 300px;
  height: 150px;
  margin: auto;

  @media (max-width: 840px) {
    width: 200px;
    height: 100px;
  }
`;
