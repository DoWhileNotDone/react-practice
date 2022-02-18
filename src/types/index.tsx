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
};

export type ParentProps = {
  /** Parent Component Props Children */
 children: React.ReactNode;
};

export type ChildProps = {
  /** Iteration Key */
 key: number;
 /** Iteration Index */
 index: number;
};