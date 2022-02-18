import { ADD_ACTION } from 'consts';
import type {
    thing,
    action,
} from 'types';

export const addAction = (thing: thing): action => { 
    return { 
        type: ADD_ACTION, 
        payload: thing
    }
};
