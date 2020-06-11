import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 400px;
  height: 150px;
  background: blue;
  border-radius: 10px;
  margin-bottom: 30px;

  ${(props) =>
    props.wide &&
    css`
      width: 40%;
    `}

  ${(props) =>
    props.big &&
    css`
      width: 63vw;
      height: 400px;
    `}
`;
