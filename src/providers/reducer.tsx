import { useReducer } from 'react';
import { ADD_ACTION } from 'consts';

import type {
    action as actionType,
    thingsState,
} from 'types';

import { state as initialState } from './initialstate'

export const appReducer = (state:thingsState = initialState, action: actionType):thingsState  => {
    switch (action.type) {
      case ADD_ACTION:
        return {
            ...state,
            things: [...state.things, action.payload],
        };
      default:
        throw new Error();
    }
  }

export const useThingReducer = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return [state, dispatch];
};
