import styled from "styled-components";
import { customMedia } from "./Breakpoints";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    span {
      color: grey;
      cursor: pointer;
    }
  }

  &:first-child {
    margin-top: 20px;
  }

  input {
    width: 300px;
    height: 40px;
    border-radius: 3px;
    border: none;
    margin: 10px 0;
    padding-left: 10px;
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme.text};

    &:focus {
      outline: none;
      border: none;
    }

    ${customMedia.lessThan("smallPhone")`
        width: 90%;
    `}
  }
`;

export const ProfileContent = styled.div`
  padding-top: 30px;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.text};
    margin-bottom: 20px;
  }
`;
