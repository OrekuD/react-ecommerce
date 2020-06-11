import styled, { css } from "styled-components";

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
  height: 100%;
  display: flex;
  padding: 0 80px;
`;

export const Routes = styled.div`
  width: 75%;
`;
