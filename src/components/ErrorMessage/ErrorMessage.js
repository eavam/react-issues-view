import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Root = styled.h2`
  font-weight: 300;
  text-align: center;
`;

const ErrorMessage = ({ message }) => <Root>{message}</Root>;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
