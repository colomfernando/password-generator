import React from 'react';
import Styles from './styles';

interface PropsRange {
  min: number;
  max: number;
  step?: number;
  onChange: (value: number | number[]) => void;
}
const Range: React.FC<PropsRange> = ({ min, max, step, onChange }) => {
  return <Styles.Range min={min} max={max} step={step} onChange={onChange} />;
};

export default Range;
