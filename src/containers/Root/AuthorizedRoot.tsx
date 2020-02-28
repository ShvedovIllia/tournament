import React from 'react';
import {Route, Switch} from "react-router-dom";
import {NavBar} from "../../components";
import {SideNavBar} from "../../components/Menu/SideNavBar";
import {RouteConst} from "../../consts";
import {styled} from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const AuthorizedRoot = () => {
  return (
    <Wrapper>
      <NavBar/>
      <Row>
        <SideNavBar/>
        <div>
          <Switch>
            <Route path={RouteConst.HomepageRoute}/>
            <Route path={RouteConst.CalendarRoute}/>
            <Route path={RouteConst.CompetitionsRoute}/>
            <Route path={RouteConst.GreetingRoute}/>
            <Route path={RouteConst.MessagesRoute}/>
            <Route path={RouteConst.SettingsRoute}/>
            <Route path={RouteConst.StatisticRoute}/>
          </Switch>
        </div>
      </Row>
    </Wrapper>
  )
};
