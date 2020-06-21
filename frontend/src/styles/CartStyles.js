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

  ${customMedia.lessThan("largePhone")`
    flex-direction: column;
    height: 300px;
  `};
`;

export const LeftContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div {
    height: 85%;
    width: 35%;

    ${customMedia.lessThan("tablet")`
      height: 85%;
      width: 45%;
    `}

    ${customMedia.lessThan("largePhone")`
      height: 85%;
      width: 35%;
    `}
  }

  ${customMedia.lessThan("largePhone")`
    width: 100%;
    height: 70%;
  `}
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

  ${customMedia.lessThan("largePhone")`
    width: 100%;
    height: 30%;
  `}
`;

export const Button = styled.span`
  cursor: pointer;
`;

export const CartTotalContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

export const Content = styled.div`
  width: 30%;
  background-color: #fae3ba;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 5px;

  ${customMedia.lessThan("tablet")`
    width: 40%;
  `}

  ${customMedia.lessThan("largePhone")`
    width: 60%;
  `}

  ${customMedia.lessThan("smallPhone")`
    width: 100%;
  `}
`
export const CartTotalButton = styled.div`
  width: 150px;
  height: 60px;
  background-color: #6f0000;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;