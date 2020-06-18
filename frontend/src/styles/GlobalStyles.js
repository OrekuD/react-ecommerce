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
    props.lowercase &&
    css`
      text-transform: lowercase;
    `}
  ${(props) =>
    props.light &&
    css`
      font-weight: 500;
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
    props.exo &&
    css`
      font-family: "Exo";
    `}
  ${(props) =>
    props.dms &&
    css`
      font-family: "DMS";
    `}
  ${(props) =>
    props.avs &&
    css`
      font-family: "AVS";
    `}
  ${(props) =>
    props.josefinsans &&
    css`
      font-family: "JosefinSans";
    `}  
`;

export const Container = styled.div`
  max-height: calc(100vh - 100px);
  display: flex;
  padding: 0 40px;
  ${customMedia.lessThan("tablet")`
    padding: 0 30px;
`}
`;

export const Routes = styled.div`
  width: 75%;
  overflow: scroll;
`;

export const Card = styled.div`
  width: 400px;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  overflow: hidden;

  ${(props) =>
    props.wide &&
    css`
      width: 40%;
    `}

  ${(props) =>
    props.big &&
    css`
      width: 64vw;
      height: 400px;
      ${customMedia.lessThan("tablet")`
        width: 66vw;
      `}
    `}
  
  ${(props) =>
    props.apparel &&
    css`
      width: 20%;
      height: 250px;
      margin: 0 30px 40px 0;
    `}
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
