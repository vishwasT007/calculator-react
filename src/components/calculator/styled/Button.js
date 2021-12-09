import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}

  ${({ operator }) =>
    operator &&
    `background-color: #393e46; color: white; 
    &:hover{background-color: #e7eaf6; color:black;}`}

  ${({ handle }) =>
    handle &&
    `   background: #24c6dc; &:hover{background-color: #ff8008; color: white;}`}


  ${({ equal }) => equal && `background: #eec0c6;`}

  ${({ point }) =>
    point &&
    `background: #3e615b; color: white; &:hover{
    color: black;
  }`}
`;
