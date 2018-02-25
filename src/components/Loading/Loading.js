import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

const SpinnerWrap = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center
`;

const Spinner = styled.span`
  display: inline-block;
  border: 2px solid transparent;
  width: 40px;
  height: 40px;
  margin: 20px 0;
  border-bottom-color: #2856b6;
  border-left-color: #2856b6;
  border-radius: 50%;
  animation: ${rotate360} .4s infinite linear;
`;

const Loading = () => (
  <SpinnerWrap>
    <Spinner />
  </SpinnerWrap>
);

export default Loading;
