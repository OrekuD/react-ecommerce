import styled from "styled-components";
import { customMedia } from "./Breakpoints.js";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  height: 230px;
  display: flex;
  margin-bottom: 20px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    height: 85%;
    width: 35%;
  }
`;
export const RightContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.span`
  cursor: pointer;
`;
