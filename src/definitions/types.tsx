import { ThingInterface } from './interfaces';

type toggleContext = () => void;

export type actionType = {
    addAction: (payload: ThingInterface) => void,
}

export type thingsState = {
    /** Toggle Context Function */
    toggleContext: toggleContext;
    /** Array of Things */
    things: Array<ThingInterface>;
};

export type ChildComponentProps = {
    /** Iteration Key */
    key: number;
    /** Item Id */
    id: number;
};

export type action = {
    type: string;
    payload: ThingInterface;
}