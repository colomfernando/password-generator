import React from 'react';
import Styles from './styles';
import Range from 'components/Range';

const Options: React.FC = () => {
  return (
    <Styles.Wrapper>
      <Styles.Title>Options</Styles.Title>
      <Styles.WrapperCheckbox>
        <Styles.Check onChange={() => null} checked={true} label="Minúsculas" />
        <Styles.Check
          onChange={() => null}
          checked={false}
          label="Mayúsculas"
        />
        <Styles.Check onChange={() => null} checked={true} label="Números" />
        <Styles.Check onChange={() => null} checked={false} label="Símbolos" />
      </Styles.WrapperCheckbox>
      <Range
        min={1}
        max={50}
        step={1}
        onChange={(value) => console.log(value)}
      />
    </Styles.Wrapper>
  );
};

export default Options;
