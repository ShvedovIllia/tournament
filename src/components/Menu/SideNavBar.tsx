import {LanguageConst, RouteConst} from "consts";
import React from 'react';
import {i18nService} from "services";
import {styled} from "styles";
import {UserAvatar} from "../UserAvatar";
import {NavMenuItem} from "./NavMenuItem";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
  box-shadow: 0px 1px 5px ${({ theme }) => theme.color.white};
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

const UserInfo: React.FC = () => (
  <UserInfoWrapper>
    <UserAvatar name='IS' size={7} textSize={2}/>
    <span>Illia Shvedov</span>
  </UserInfoWrapper>
);

export const SideNavBar: React.FC = () => {

  const t = i18nService.t('navigation_container');

  return (
    <Wrapper>
      <UserInfo/>
      <NavMenuItem title={t('main')} icon={<></>} route={RouteConst.HomepageRoute}/>
      <NavMenuItem title={t('messages')} icon={<></>} route={RouteConst.MessagesRoute}/>
      <NavMenuItem title={t('calendar')} icon={<></>} route={RouteConst.CalendarRoute}/>
      <NavMenuItem title={t('statistic')} icon={<></>} route={RouteConst.StatisticRoute}/>
      <NavMenuItem title={t('competitions')} icon={<></>} route={RouteConst.CompetitionsRoute}/>
      <NavMenuItem title={t('settings')} icon={<></>} route={RouteConst.SettingsRoute}/>

      <button onClick={async () => i18nService.setLanguage(LanguageConst.EN)} >ENGLISH</button>
      <button onClick={async () => i18nService.setLanguage(LanguageConst.UA)} >UKRAINIAN</button>
    </Wrapper>
  )
};

