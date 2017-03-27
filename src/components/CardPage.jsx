import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 7px 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  transition: all .3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 20px 0 rgba(168,182,191,.6)
  }
`

const Title = styled.div`
  font-weight: 300;
  margin: 1rem 0;
  font-size: ${props => props.small ? '.8rem' : '1.4rem'}
`

const CardPage = ({ title, body, user, number }) => {
  return (
    <Wrapper>
      <Title>#{number} <a href={user.html_url}>{user.login}</a></Title>
      <Title>{title}</Title>
      <Title>{body}</Title>
    </Wrapper>
  );
};

export default CardPage;