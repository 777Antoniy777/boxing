import { createAction } from 'redux-actions';

export const UserActionType = {
  SET_AUTHORIZATION_STATUS: 'SET_AUTHORIZATION_STATUS',
};

const UserActions = {
  setAuthorizationStatus: createAction(UserActionType.SET_AUTHORIZATION_STATUS),
};

const UserAsyncActions = {
  setAuthorizationStatus: () => async (dispatch, getState, api) => {
    return api
      .get(`/login`)
      .then((response) => {
        const data = response.data;
        console.log('data', data)

        dispatch(UserActions.setAuthorizationStatus('auth'));
      })
      .catch((error) => {
        throw error;
      });


  },
};