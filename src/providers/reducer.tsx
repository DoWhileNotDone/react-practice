
import { action_types } from './types';

import type {
    action as actionType,
    thingsState,
} from 'types';

import { state as initialState } from './initialstate'

export const appReducer = (state: thingsState = initialState, { type, payload}: actionType):thingsState  => {

    if (!type) {
      throw new Error('ThingsProvider action type is undefined')
    }

    switch (type) {
      case action_types.ADD_ACTION:
        return {
            ...state,
            things: [...state.things, payload],
        };
      default:
        throw new Error(`No matching action found for ${type}`);
    }
};