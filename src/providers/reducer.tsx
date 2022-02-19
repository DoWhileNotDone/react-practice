import { action_types } from 'definitions';

import type {
    action as actionType,
    thingsState,
} from 'definitions';

export const appReducer = (state: thingsState, { type, payload }: actionType): thingsState  => {

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
        return state;
    }
};