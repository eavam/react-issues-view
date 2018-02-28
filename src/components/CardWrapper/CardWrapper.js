import styled from 'react-emotion';

export default styled('div')`
  width: ${props => (props.full ? '100%' : '45%')};
  background: #fff;
  padding: 7px 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px 0 rgba(168, 182, 191, 0.6);
  }
`;
