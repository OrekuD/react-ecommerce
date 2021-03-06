import styled, { css } from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
  font-family: "JosefinSansR";

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
    props.huge &&
    css`
      font-size: 26px;
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
  ${(props) =>
    props.bold &&
    css`
      font-family: "JosefinSans";
    `}
  ${(props) =>
    props.heavy &&
    css`
      font-weight: bold;
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

export const Button = styled.button`
  width: 100px;
  height: 35px;
  margin: 15px 0;
  border-radius: 3px;
  border: none;
  background-color: ${(props) => props.theme.text};
  cursor: pointer;

  &:focus {
    border: none;
    outline: none;
  }

  p {
    font-size: 16px;
  }
`;

export const LoadingSreen = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 100px;
`;
