import type {
    thingsContext as thingsContextType,
} from 'types';

export const state: thingsContextType = {
    things: [], // set a default value
    toggleContext: () => { console.log(1234) },
};