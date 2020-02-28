import React from 'react';
import {styled} from "../../styles";
import {H3} from "../Text";
import {SearchInput} from "./SearchInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  box-shadow: 0px 1px 5px ${({ theme }) => theme.color.white};
  width: 100%;
  height: 50px;
  justify-content: center;
`;

const Logo = styled(H3)`
  color: #FFF
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavBar = () => {
  return (
    <Wrapper>
      <Row>
        <Logo>SPORT SOFT >></Logo>
        <SearchInput/>
      </Row>
    </Wrapper>
  )
};
