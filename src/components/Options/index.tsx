import React from 'react';
import Styles from './styles';
import Range from 'components/Range';
import { useContext } from 'context';
import {
  setCapitalize,
  setLength,
  setLowercase,
  setNumbers,
  setSymbols,
} from 'context/actions';

const Options: React.FC = () => {
  const { state, dispatch } = useContext();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    if (Number.isNaN(Number(value))) return null;
    if (Number(value) < 1) return dispatch(setLength(1));
    if (Number(value) > 50) return dispatch(setLength(50));

    dispatch(setLength(Number(value)));
  };

  return (
    <Styles.Wrapper>
      <Styles.Title>Options</Styles.Title>
      <Styles.WrapperCheckbox>
        <Styles.Check
          onChange={() => dispatch(setCapitalize(!state.capitalize))}
          checked={state.capitalize}
          label="Capitalize"
        />
        <Styles.Check
          onChange={() => dispatch(setLowercase(!state.lowercase))}
          checked={state.lowercase}
          label="Lowercase"
        />
        <Styles.Check
          onChange={() => dispatch(setNumbers(!state.numbers))}
          checked={state.numbers}
          label="Numbers"
        />
        <Styles.Check
          onChange={() => dispatch(setSymbols(!state.symbols))}
          checked={state.symbols}
          label="Symbols"
        />
      </Styles.WrapperCheckbox>
      <Styles.WrapperRange>
        <Styles.Length value={state.length} onChange={handleOnChange} />
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
