import { CounterActionType } from './counter.actions';

const initialState = {
  counter: 0,
};

export default function createState(state = initialState, action) {
  switch (action.type) {
    case CounterActionType.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case CounterActionType.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
}