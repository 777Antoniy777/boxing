import { createAction } from 'redux-actions';

export const UserActionType = {
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
};

export const UserActions = {
  setAuthorizationStatus: createAction(UserActionType.SET_AUTHORIZATION_STATUS),
};

export const UserAsyncActions = {
  setAuthorizationStatus: (login: string, password: string) => async (dispatch, getState, api) => {
    const body = {
      username: login,
      password,
    };

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    return api
      .post(`/login`, body, headers)
      .then((response) => {
        const data = response.data;
        console.log('data', data);

        dispatch(UserActions.setAuthorizationStatus('auth'));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
