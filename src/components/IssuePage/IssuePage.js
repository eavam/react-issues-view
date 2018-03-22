import React from 'react';
import styled from 'react-emotion';
import Text from '../Text';
import CardWrapper from '../CardWrapper';

const Wrapper = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
`;

const IssuePage = ({
  title, body, user, number,
}) => (
  <Wrapper>
    <CardWrapper full>
      <Text big>
        #{number} <a href={user.html_url}>{user.login}</a>
      </Text>
      <Text big>{title}</Text>
      <Text>{body}</Text>
    </CardWrapper>
  </Wrapper>
);

export default IssuePage;
