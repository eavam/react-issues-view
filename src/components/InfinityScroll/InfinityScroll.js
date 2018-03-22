import React from 'react';
import styled from 'react-emotion';
import Button from '../Button';

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const InfinityScroll = ({ onClick }) => (
  <Wrapper>
    <Button onClick={onClick}>Load more</Button>
  </Wrapper>
);

export default InfinityScroll;
