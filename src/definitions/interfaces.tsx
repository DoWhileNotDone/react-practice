import { thingsState, actionType } from "./types";

export interface ThingInterface {
  id: number;
  name: string;
  length: number;
}

export interface AppContextInterface {
  state: thingsState;
  actions: actionType
}

export interface ComponentPropsInterface {
  children: React.ReactNode,
  // any props that come into the component
}