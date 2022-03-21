import React, { useEffect } from 'react';
import Styles from './styles';
import Range from 'components/Range';
import { useContext } from 'context';
import {
  setCapitalize,
  setLength,
  setLowercase,
  setNumbers,
  setSymbols,
  setPassword,
} from 'context/actions';
import PasswordGenerator from 'lib/PasswordGenerator';

interface IMapDispatch {
  capitalize: () => void;
  lowercase: () => void;
  symbols: () => void;
  numbers: () => void;
}

const passwordGenerator = new PasswordGenerator();

const Options: React.FC = () => {
  const { state, dispatch } = useContext();

  const handleOnChangeRange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    if (Number.isNaN(Number(value))) return null;
    if (Number(value) < 1) return dispatch(setLength(1));
    if (Number(value) > 50) return dispatch(setLength(50));

    dispatch(setLength(Number(value)));
  };

  const handleOnChangeCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: keyof IMapDispatch
  ) => {
    const hasOptionCheck = [
      state.capitalize,
      state.lowercase,
      state.numbers,
      state.symbols,
    ].filter(Boolean);

    if (hasOptionCheck.length === 1 && !event.target.checked) return null;

    const mapDispatch = {
      capitalize: () => dispatch(setCapitalize(!state.capitalize)),
      lowercase: () => dispatch(setLowercase(!state.lowercase)),
      symbols: () => dispatch(setSymbols(!state.symbols)),
      numbers: () => dispatch(setNumbers(!state.numbers)),
    };

    const cb = mapDispatch[type];
    return cb();
  };

  useEffect(() => {
    const password = passwordGenerator.generate(
      state.capitalize,
      state.lowercase,
      state.numbers,
      state.symbols,
      state.length
    );

    if (!password) return;

    return dispatch(setPassword(password));
  }, [
    state.capitalize,
    state.lowercase,
    state.numbers,
    state.symbols,
    state.length,
  ]);

  return (
    <Styles.Wrapper>
      <Styles.Title>Options</Styles.Title>
      <Styles.WrapperCheckbox>
        <Styles.Check
          onChange={(event) => handleOnChangeCheck(event, 'capitalize')}
          checked={state.capitalize}
          label="Capitalize"
        />
        <Styles.Check
          onChange={(event) => handleOnChangeCheck(event, 'lowercase')}
          checked={state.lowercase}
          label="Lowercase"
        />
        <Styles.Check
          onChange={(event) => handleOnChangeCheck(event, 'numbers')}
          checked={state.numbers}
          label="Numbers"
        />
        <Styles.Check
          onChange={(event) => handleOnChangeCheck(event, 'symbols')}
          checked={state.symbols}
          label="Symbols"
        />
      </Styles.WrapperCheckbox>
      <Styles.WrapperRange>
        <Styles.Length value={state.length} onChange={handleOnChangeRange} />
        <Range
          min={1}
          max={50}
          step={1}
          defaultValue={1}
          value={state.length}
          onChange={(value) => dispatch(setLength(Number(value)))}
        />
      </Styles.WrapperRange>
    </Styles.Wrapper>
  );
};

export default Options;
