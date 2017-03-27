import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export default styled.span`
  display: inline-block;
  border: 2px solid transparent;
  width: 40px;
  height: 40px;
  margin: 20px 0;
  border-bottom-color: #2856b6;
  border-left-color: #2856b6;
  border-radius: 50%;
  animation: ${rotate360} .4s infinite linear;
`