// import { createStore, applyMiddleware } from 'redux';
import {Action, action, createStore, createTypedHooks} from 'easy-peasy';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createAPI from './api';
import { rootReducer } from './reducers';

interface Todo {
  text: string;
  done: boolean;
}

interface StoreModel {
  todos: Todo[];
  addTodo: Action<StoreModel, Todo>;
}

const onUnauthorized = () => {
  console.log('UNAUTHORIZED');
  // store.dispatch(UserActionCreator.setAuthorizationStatus(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
// );

export const store = createStore<StoreModel>({
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push({ text: payload.text, done: payload.done });
  }),
});

// типизированные хуки
const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
