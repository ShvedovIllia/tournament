import React from 'react';
import {styled} from "styles";
import {SearchInput} from "./SearchInput";
import {SportSoftLogo} from "components/Icon/Logo/SportSoftLogo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  box-shadow: 0px 1px 5px ${({ theme }) => theme.color.white};
  width: 100%;
  height: 80px;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin: 10px;
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <Row>
        <LogoWrapper>
          <SportSoftLogo/>
        </LogoWrapper>
        <SearchInput/>
      </Row>
    </Wrapper>
  )
};
