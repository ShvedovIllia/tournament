import {LoginForm} from "components/Form/LoginForm";
import {RouteConst} from "consts";
import React from 'react';
import {NavLink} from "react-router-dom";
import {IHandleLoginActionType} from "store/domains/auth/action";

interface IGreetingProps {
  handleLoginAction: IHandleLoginActionType
}

export const Greeting: React.FC<IGreetingProps> = ({ handleLoginAction }) => {
  return (
    <div>
      <NavLink to={RouteConst.HomepageRoute}>
        AUTH
      </NavLink>
      <LoginForm onSubmit={handleLoginAction}/>
    </div>
  )
};
