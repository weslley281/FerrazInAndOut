import { styled } from "styled-components";

export const MenuContainer = styled.ul`
  margin: 0 auto;
  float: none;
  clear: both;
  overflow: hidden;
  font-family: "Menlo", "Lucida Console", monospace;
  line-height: 1;
  transition: all 0.3s;
  list-style: none;
  background-color: black;
  padding: 10px 10px;
  width: 100%;
  border-radius: 1rem;

  a {
    color: whitesmoke;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline: none;

    border-radius: 1rem;
  }

  a:hover {
    border-bottom: 1px solid;
  }

  li {
    display: block;
    float: left;
    border-right: 1px solid rgba(194, 245, 255, 0.4);
    padding: 0 20px;
    font-size: 13px;
    opacity: 0.8;
  }

  li:last-child {
    border: none;
  }

  @media (max-width: 840px) {
    display: block;
  }
`;
