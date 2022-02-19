import { Dispatch, useCallback } from 'react';
import { action_types } from 'definitions';
import type { thingsState } from 'definitions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useActions = (state: thingsState, dispatch: Dispatch<any>) => {

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
