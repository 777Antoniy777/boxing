import { UserActionType } from './user.actions';

const initialState = {
  authorizationStatus: null,
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case UserActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default:
      return state;
  }
}