import styled, { css } from "styled-components";
import { customMedia } from "./Breakpoints";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;

  ${(props) =>
    props.invertColor &&
    css`
      color: ${(props) => props.theme.background};
    `}

  ${(props) =>
    props.tiny &&
    css`
      font-size: 12px;
    `}
  ${(props) =>
    props.small &&
    css`
      font-size: 16px;
    `}
  ${(props) =>
    props.medium &&
    css`
      font-size: 20px;
    `}
  ${(props) =>
    props.big &&
    css`
      font-size: 22px;
    `}
  ${(props) =>
    props.bigger &&
    css`
      font-size: 24px;
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.heavy &&
    css`
      font-weight: bold;
    `}
  ${(props) =>
    props.josefinsans &&
    css`
      font-family: "JosefinSans";
    `}  
  ${(props) =>
    props.color &&
    css`
      color: ${(props) => props.color};
    `} 
`;

export const Container = styled.div`
  display: flex;
  padding: 0 10px;
  margin-top: 100px;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
