export type thing = {
  id: number;
  name: string;
  length: number;
};

export type toggleContext = () => void;

export type thingsContext = {
  /** Toggle Context Function */
  toggleContext: toggleContext;
  /** Array of Things */
  things: Array<thing>;
}  
