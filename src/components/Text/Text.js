import styled from 'react-emotion';

const getFontSize = ({ small, big }) => {
  if (small) {
    return '.8rem';
  } else if (big) {
    return '1.4rem';
  }
  return '1rem';
};

export default styled('div')`
  font-weight: 300;
  margin: 1rem 0;
  font-size: ${getFontSize};
  word-break: break-word;
`;
