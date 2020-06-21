import styled from "styled-components";
import { customMedia } from "./Breakpoints";

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  width: 60%;
  height: calc(100vh - 100px);
  margin-left: -10px;
`;

export const RightContainer = styled.div`
  width: 40%;
  background-color: blue;
`;
