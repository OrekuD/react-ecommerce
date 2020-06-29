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
    background-color: ${(props) => props.theme.text};

    &:focus {
      outline: none;
      border: none;
    }

    ${customMedia.lessThan("smallPhone")`
        width: 90%;
    `}
  }

  button {
    width: 100px;
    height: 35px;
    margin: 15px 0;
    border-radius: 3px;
    border: none;
    background-color: ${(props) => props.theme.text};

    p {
      font-size: 16px;
    }
  }
`;
