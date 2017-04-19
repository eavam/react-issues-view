import React, { PropTypes } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Text from './Text'
import CardWrapper from './CardWrapper'

const LinkWrapper = styled(Link)`
  color: #000;
  text-decoration: none;
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
    <CardWrapper>
      <HeadBar>
        <HeadBarItem>
          <img src={user.avatar_url} alt={user.login} width='35' height='35' />
        </HeadBarItem>
        <HeadBarItem>
          #{number}
        </HeadBarItem>
        <HeadBarItem>
          <a href={user.html_url} target='_blank'>{user.login}</a>
        </HeadBarItem>
      </HeadBar>
      <LinkWrapper to={`${username}/${repo}/issue/${number}`}>
        <Text big>{title}</Text>
        <Text small>Created {moment(created_at).format('DD MMMM YYYY')}</Text>
      </LinkWrapper>
    </CardWrapper>
  )
}

Card.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
}

export default Card