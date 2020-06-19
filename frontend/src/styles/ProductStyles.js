import styled from "styled-components";
import { customMedia } from "./Breakpoints";

export const ProductContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LeftContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightContainer = styled.div`
  width: 45%;
  margin-top: 18px;
`;

export const Title = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #fae3ba;
  padding-left: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

export const ContentTop = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 150px;
  height: 60px;
  background-color: #6f0000;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
