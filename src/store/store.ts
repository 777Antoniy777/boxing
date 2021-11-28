import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createAPI from "./api";
import {rootReducer} from "./reducers";
// import {AuthorizationStatus} from "../enums";
// import {OffersAsyncActionCreator} from "../actions/offers/async-action-creator";
// import {UserActionCreator} from "../actions/user/action-creator";
// import {UserAsyncActionCreator} from "../actions/user/async-action-creator";

const onUnauthorized = () => {
  console.log('UNAUTHORIZED')
  // store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

// store.dispatch(OffersAsyncActionCreator.getOffers());