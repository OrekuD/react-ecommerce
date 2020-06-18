import styled, { css } from "styled-components";
import { customMedia } from "./Breakpoints";

export const BannerContainer = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 400px;
  background-color: #cd031d;
  display: flex;
  align-items: center;

  /* #cd011a */

  span {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 50px;

    div {
      border-radius: 25px;
      background-color: white;
      width: 120px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  div {
    width: 50%;
    height: 100%;

    ${customMedia.lessThan("tablet")`
      width: 60%;
      height: 80%;
    `}
  }
`;
