import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoSection = styled.div`
  width: 25%;
`;

export const SearchToolBar = styled.div`
  width: 55%;
`;

export const UserDetails = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 25px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const TextInput = styled.input`
  width: 90%;
  height: 90%;
  border: none;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: grey;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px 0 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 2px 0 0 10px;
    cursor: pointer;
  }
`;

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  background: purple;
  border-radius: 100%;
  margin-right: 15px;
`;
