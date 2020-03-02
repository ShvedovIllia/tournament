import {AuthTypeKeys} from "./actionTypes";
import * as api from './api';
import {IThunk} from "types";

export type ILoginApiActionType = (username: string, password: string) => any;

export const loginApiAction: ILoginApiActionType = (username, password) => ({
  type: AuthTypeKeys.LOGIN_ACTION,
  payload: api.loginApi(username, password)
});

export type IHandleLoginActionType = (username: string, password: string) => IThunk<void>;

export const handleLoginAction: IHandleLoginActionType = (username, password) => async dispatch => {
  dispatch(loginApiAction(username, password));
};
