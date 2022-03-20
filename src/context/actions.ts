import types from './types';

export interface IAction<T> {
  type: string;
  payload: T;
}

export type Actions = IAction<boolean> | IAction<number>;

export const setCapitalize = (payload: boolean): IAction<boolean> => ({
  type: types.SET_CAPITALIZE,
  payload,
});

export const setLowercase = (payload: boolean): IAction<boolean> => ({
  type: types.SET_LOWERCASE,
  payload,
});

export const setNumbers = (payload: boolean): IAction<boolean> => ({
  type: types.SET_NUMBERS,
  payload,
});

export const setSymbols = (payload: boolean): IAction<boolean> => ({
  type: types.SET_SYMBOLS,
  payload,
});

export const setLength = (payload: number): IAction<number> => ({
  type: types.SET_LENGTH,
  payload,
});
