import styled from 'styled-components'

export default styled.input`
  padding: 7px 15px;
  margin: 10px;
  font-size: 1.2rem;
  border: none;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  transition: all .3s;
  outline: none;
  font-weight: 300;

  &:focus {
    box-shadow: 0 4px 20px 0 rgba(168,182,191,.6)
  }
`