import React from 'react';
import Styles from './styles';

interface PropsRange {
  min: number;
  max: number;
  value: number;
  defaultValue?: number;
  step?: number;
  onChange: (value: number | number[]) => void;
}
const Range: React.FC<PropsRange> = ({
  min,
  max,
  step,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <Styles.Range
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default Range;
