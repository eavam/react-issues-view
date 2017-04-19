import React from 'react'
import styled from 'styled-components'

const Root = styled.h2`
  font-weight: 300;
  text-align: center;
`

const ErrorMessage = ({message}) => <Root>{message}</Root>

export default ErrorMessage