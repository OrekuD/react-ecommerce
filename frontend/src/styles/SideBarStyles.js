import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 25%;
  height: calc(100vh - 100px);
  background-color: blue;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    transform: scale(0.7);
    margin-right: 10px;
  }
`;
