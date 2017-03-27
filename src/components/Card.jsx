import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
  width: 45%;
  background: #fff;
  padding: 7px 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  transition: all .3s;
  color: #000;
  text-decoration: none;

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

const HeadBar = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
`

const HeadBarItem = styled.div`
  margin: 5px;
`

const Card = ({ number, title, user, created_at, username, repo }) => {
  return (
    <Wrapper to={`${username}/${repo}/issue/${number}`} >
      <HeadBar small >
        <HeadBarItem>
          <img src={user.avatar_url} alt={user.login} width='35' height='35' />
        </HeadBarItem>
        <HeadBarItem>
          #{number}
        </HeadBarItem>
        <HeadBarItem>
          <a href={user.html_url}>{user.login}</a>
        </HeadBarItem>
      </HeadBar>
      <Title>{title}</Title>
      <Title small >Created {moment(created_at).format('DD MMMM YYYY')}</Title>
    </Wrapper>
  );
};

export default Card;