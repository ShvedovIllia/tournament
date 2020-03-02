import {RouteConst} from "consts";
import React from 'react';
import {Route, Switch} from "react-router-dom";
import {styled} from "styles";
import Greeting from "../Greeting";
import {AuthorizedRoot} from "./AuthorizedRoot";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.color.backgroundSecondary};
`;

export const Root: React.FC = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path={RouteConst.GreetingRoute} component={Greeting}/>
        <Route path={RouteConst.RootRoute} component={AuthorizedRoot}/>
      </Switch>
    </Wrapper>
  )
};
