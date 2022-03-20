import React from 'react';
import svgs from './svgs';
import Styles from './styles';

export interface IIconProps {
  iconName: string;
  width?: number;
  height?: number;
  color?: string;
}
const Icon: React.FC<IIconProps> = ({
  iconName,
  color,
  width,
  height,
  ...props
}) => {
  if (!(iconName in svgs)) return null;

  const { viewBox, paths, w, h } = svgs[iconName];

  return (
    <Styles.Svg
      viewBox={viewBox}
      width={width || w}
      height={height || h}
      color={color}
      {...props}
    >
      {paths.map((path, idx) => (
        <Styles.Path key={idx.toString()} d={path} />
      ))}
    </Styles.Svg>
  );
};

export default Icon;
