import React from 'react';
import {IThemeProps, styled, withTheme} from "styles";
import {SearchInput} from "./SearchInput";
import {Button, H3, SportSoftLogo} from "components";
import {i18nService} from "services";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled(Row)`
 background: ${({ theme }) => `linear-gradient(to right, ${theme.color.backgroundPrimary} , ${theme.color.backgroundSecondary})`};
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  width: 150px;
  margin-right: 15px;
`;

interface INavBarProps extends IThemeProps {

}

const NavBarComponent: React.FC<INavBarProps> = ({theme}) => {
  const t = i18nService.t();

  return (
    <Wrapper>
      <Row>
        <LogoWrapper>
          <SportSoftLogo/>
        </LogoWrapper>
        <SearchInput/>
      </Row>
      <Row>
        <ButtonWrapper>
          <Button background={theme.color.primary}>
            <H3>{t('common:sign_up')}</H3>
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button background={theme.color.secondary}>
            <H3>{t('common:log_in')}</H3>
          </Button>
        </ButtonWrapper>
      </Row>
    </Wrapper>
  )
};

export const NavBar = withTheme(NavBarComponent);
