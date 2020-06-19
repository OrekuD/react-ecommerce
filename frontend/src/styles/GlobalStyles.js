import styled, { css } from "styled-components";
import { customMedia } from "./Breakpoints";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;

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
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 200px;

  ${(props) =>
    props.apparel &&
    css`
      width: 22%;
      height: 500px;
      margin-bottom: 40px;
      position: relative;

      div {
        position: absolute;
        bottom: -65px;
        left: 0;
        right: 0;
        height: 60px;
        background-color: rgba(1, 1, 0, 0.5);

        ${customMedia.lessThan("smallDesktop")`
          bottom: 0;
        `}
      }

      ${customMedia.lessThan("desktop")`
        width: 22%;
        height: 300px;
      `}

      ${customMedia.lessThan("tablet")`
        width: 28%;
        height: 250px;
      `}

      ${customMedia.lessThan("largePhone")`
        width: 40%;
      `}

      ${customMedia.lessThan("smallPhone")`
        width: 90%;
        height: 400px;
      `}
    `}
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
