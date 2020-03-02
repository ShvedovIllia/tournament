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
  flex-direction: column;
  margin-top: 1vh;
  justify-content: center;
  align-items: center;
  
`;

const Title = styled(H3)`
  color: ${({theme}) => theme.color.white}
  
    &:hover {
    color: ${({theme}) => theme.color.primary}
   }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

export const NavMenuItem: React.FC<INavMenuItemProps> = ({title, icon, route}) => {
  return (
    <NavLink to={route}>
      <Wrapper>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <Title>
          {title}
        </Title>
      </Wrapper>
    </NavLink>
  )
};
