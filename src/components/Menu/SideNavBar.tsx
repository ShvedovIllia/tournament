import {LanguageConst, RouteConst} from "consts";
import React from 'react';
import {i18nService} from "services";
import {IThemeProps, styled, withTheme} from "styles";
import {UserAvatar} from "../UserAvatar";
import {NavMenuItem} from "./NavMenuItem";
import {CalendarIcon, FileIcon, MonitorIcon, TournamentIcon} from "components/Icon/SideBar";
import {MessageIcon} from "components/Icon/SideBar/MessageIcon";
import {SettingsIcon} from "components/Icon/SideBar/SettingsIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.color.backgroundPrimary} , ${theme.color.backgroundSecondary})`};
  height: 100%;
  width: 9%;
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 2vh 0vh;
  align-items: center;
`;

const NameColor = styled.span`
  color: ${({ theme}) => theme.color.backgroundSecondary};
`;

const UserInfo: React.FC = () => (
  <UserInfoWrapper>
    <UserAvatar name='IS' size={7} textSize={2}/>
    <NameColor>Illia Shvedov</NameColor>
  </UserInfoWrapper>
);

const SideNavBarComponent: React.FC<IThemeProps> = ({theme}) => {

  const t = i18nService.t('navigation_container');

  return (
    <Wrapper>
      <UserInfo/>
      <NavMenuItem title={t('main')} icon={
        <MonitorIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.HomepageRoute}/>
      <NavMenuItem title={t('messages')} icon={
        <MessageIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.MessagesRoute}/>
      <NavMenuItem title={t('calendar')} icon={
        <CalendarIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.CalendarRoute}/>
      <NavMenuItem title={t('statistic')} icon={
        <FileIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.StatisticRoute}/>
      <NavMenuItem title={t('competitions')} icon={
        <TournamentIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.CompetitionsRoute}/>
      <NavMenuItem title={t('settings')} icon={
        <SettingsIcon width={50} height={50} color={theme.color.primary}/>
      } route={RouteConst.SettingsRoute}/>

      <button onClick={async () => i18nService.setLanguage(LanguageConst.EN)} >ENGLISH</button>
      <button onClick={async () => i18nService.setLanguage(LanguageConst.UA)} >UKRAINIAN</button>
    </Wrapper>
  )
};

export const SideNavBar = withTheme(SideNavBarComponent);
