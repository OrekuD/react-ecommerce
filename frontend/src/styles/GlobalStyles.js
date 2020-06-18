import styled, { css } from "styled-components";
import { customMedia } from "./Breakpoints";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;

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
`;

export const Container = styled.div`
  display: flex;
  padding: 0 10px;
  background: blue;
  margin: 0;
  width: 100%;
`;

export const Card = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 200px;

  ${(props) =>
    props.apparel &&
    css`
      width: 22%;
      height: 300px;
      margin-bottom: 40px;

      ${customMedia.lessThan("tablet")`
        width: 30%;
      `}

      ${customMedia.lessThan("largePhone")`
        width: 40%;
      `}

      ${customMedia.lessThan("smallPhone")`
        width: 90%;
      `}
    `}
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex: 1;

  ${customMedia.lessThan("largePhone")`
        background-color: red;
      `}
`;
