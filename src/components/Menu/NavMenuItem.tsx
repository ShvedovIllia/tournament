import React from 'react';
import {NavLink} from "react-router-dom";
import {RouteConst} from "../../consts";
import {styled} from "../../styles";
import {H3} from "../Text";

interface INavMenuItemProps {
  title: string;
  icon: React.ReactElement;
  route: RouteConst;
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 1vh;
  justify-content: center;
`;

const Title = styled(H3)`
  color: ${({ theme }) => theme.color.white}
  
    &:hover {
    color: ${({ theme }) => theme.color.primary}
   }
`;

export const NavMenuItem: React.FC<INavMenuItemProps> = ({ title, icon, route }) => {
  return (
    <Wrapper>
      {icon}
      <NavLink to={route}>
        <Title>
          {title}
        </Title>
      </NavLink>
    </Wrapper>
  )
};
