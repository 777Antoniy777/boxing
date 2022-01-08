import { createAction } from 'redux-actions';

export const CounterActionType = {
  INCREASE_COUNTER: 'INCREASE_COUNTER',
  DECREASE_COUNTER: 'DECREASE_COUNTER',
};

export const CounterActions = {
  increaseCounter: createAction(CounterActionType.INCREASE_COUNTER),
  decreaseCounter: createAction(CounterActionType.DECREASE_COUNTER),
};