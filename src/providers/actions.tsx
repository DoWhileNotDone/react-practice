import { Dispatch, useCallback } from 'react';
import type { action, thingsState } from 'definitions'

export const action_types = {
    ADD_ACTION: 'add',
};    

export const useActions = (state: thingsState, dispatch: Dispatch<action>) => {

    const addAction = useCallback(
        payload => {
            dispatch({
                type: action_types.ADD_ACTION,
                payload
            });
        },
        [dispatch]
    );

    return {
        addAction,
    };
}    
