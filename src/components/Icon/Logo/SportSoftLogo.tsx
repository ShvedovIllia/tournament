import React from 'react';
import {styled} from "styles";
import {SportSoftLogoIcon} from "components/Icon/Logo/SportSoftLogoIcon";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Text = styled.h1`
  font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif; 
  font-size: 30; 
  font-weight: 400;
font-stretch: ultra-condensed;
  color: ${({theme}) => theme.color.white}
`;

const LogoWrapper = styled.div`
  height: 45px;
  width: 45px;
  
`;

export const SportSoftLogo: React.FC = () => {
  return (
    <Wrapper>
      <Text>SPORTSOFT</Text>
      <LogoWrapper>
        <SportSoftLogoIcon/>
      </LogoWrapper>
    </Wrapper>
  )
};
