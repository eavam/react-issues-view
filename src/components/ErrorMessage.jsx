import React from 'react';
import styled from 'styled-components'

const Root = styled.h2`
  font-weight: 300;
  text-align: center;
`

const ErrorMessage = ({ error }) => {
  return (
    error.message
    ? <Root>{error.message}</Root>
    : null
  );
};

export default ErrorMessage;