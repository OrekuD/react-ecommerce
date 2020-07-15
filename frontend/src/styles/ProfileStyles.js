import styled, { css } from "styled-components";
import { customMedia } from "./Breakpoints";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;

  ${customMedia.lessThan("tablet")`
    flex-direction: column;
    padding-top: 30px;
  `}

  ${customMedia.lessThan("largePhone")`
    padding-top: 5px;
   `}
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

export const ProfileContentLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: "row";
  justify-content: center;

  ${customMedia.lessThan("tablet")`
    width: 100%;
    margin-bottom: 30px;
  `}

  img {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    border: 1px solid ${(props) => props.theme.text};
    margin-bottom: 20px;

    ${customMedia.lessThan("tablet")`
      width: 160px;
      height: 160px;
   `}

    ${customMedia.lessThan("largePhone")`
      width: 130px;
      height: 130px;
   `}
  }

  div {
    display: flex;
    height: "100%";
    flex-direction: column;
    margin-left: 20px;
    justify-content: space-between;
    padding: 10px 0 20px 0;

    .theme {
      p {
        cursor: pointer;
      }
    }
  }
`;

export const ProfileContentRight = styled.div`
  width: 50%;

  ${customMedia.lessThan("tablet")`
    width: 100%;
  `}
`;

export const Group = styled.div`
  width: 90%;
  margin: 0 auto;

  ${(props) =>
    props.bottom &&
    css`
      margin-top: 50px;
    `};
`;

export const SectionHeader = styled.div`
  height: 50px;
  background-color: lightslategray;
  padding-left: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
