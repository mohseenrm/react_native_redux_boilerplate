import {
  CLEAR_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  SET_COUNTER,
} from './types';

export const counterIncrement = () => ({ type: INCREMENT_COUNTER });

export const counterDecrement = () => ({ type: DECREMENT_COUNTER });

export const counterClear = () => ({ type: CLEAR_COUNTER });

export const counterSet = number => ({
  type: SET_COUNTER,
  payload: number,
});
