import styled from "styled-components";
import { customMedia } from "./Breakpoints";

export const HeaderContainer = styled.div`
  height: 100px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${customMedia.lessThan("tablet")`
    padding: 0 60px;
  `}

  ${customMedia.lessThan("largePhone")`
    padding: 0 20px;
  `};
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px 2px 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 50px;

  ${customMedia.lessThan("largePhone")`
    margin-left: 30px;
  `}

  ${customMedia.lessThan("smallPhone")`
    display: none;
  `}

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin-right: 10px;
  }
`;
