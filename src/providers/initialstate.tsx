import type {
    thingsState,
} from 'definitions';

export const state: thingsState = {
    things: [], // set a default value
    toggleContext: () => { console.log(1234) },
};