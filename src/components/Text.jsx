import styled from 'styled-components'

export default styled.div`
  font-weight: 300;
  margin: 1rem 0;
  font-size: ${props => props.small ? '.8rem' : props.big ? '1.4rem' : '1rem'}
`