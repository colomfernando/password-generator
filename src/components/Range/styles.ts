import styled from 'styled-components';
import RangeComp from 'rc-slider';
import 'rc-slider/assets/index.css';
import palette from 'theme/palette';

const Range = styled(RangeComp)`
  & {
    .rc-slider-track {
      background-color: ${palette.green};
    }
    .rc-slider-handle {
      background-color: ${palette.green};
      border-color: ${palette.green};
      opacity: 1;
    }
  }
`;

export default { Range };
