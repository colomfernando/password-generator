import React from 'react';
import types from './types';
import { Actions } from './actions';

export interface IState {
  password: string;
  numbers: boolean;
  capitalize: boolean;
  lowercase: boolean;
  symbols: boolean;
  length: number;
}

const initialState = {
  password: '',
  numbers: true,
  capitalize: true,
  lowercase: true,
  symbols: true,
  length: 12,
};

export interface IReducer {
  state: IState;
  dispatch: React.Dispatch<Actions>;
}

const Store = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const contextReducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case types.SET_PASSWORD:
      return { ...state, password: action.payload } as IState;

    case types.SET_CAPITALIZE:
      return { ...state, capitalize: action.payload } as IState;

    case types.SET_LOWERCASE:
      return { ...state, lowercase: action.payload } as IState;

    case types.SET_NUMBERS:
      return { ...state, numbers: action.payload } as IState;

    case types.SET_SYMBOLS:
      return { ...state, symbols: action.payload } as IState;

    case types.SET_LENGTH:
      return { ...state, length: action.payload } as IState;
    default:
      return state;
  }
};

const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(contextReducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useContext = () => {
  const context = React.useContext(Store);
  return context;
};

export default ContextProvider;
