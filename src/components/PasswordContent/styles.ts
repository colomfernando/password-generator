import styled from 'styled-components';
import palette from 'theme/palette';

const Wrapper = styled.div`
  background-color: ${palette.common.white};
  border-radius: 3px;
  padding: 15px;
  border-top-color: ${palette.green};
  border-top-width: 5px;
  border-top-style: solid;
  font-size: 2rem;
`;

export default { Wrapper };
