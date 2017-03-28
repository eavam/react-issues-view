import React from 'react';
import Text from './Text'
import CardWrapper from './CardWrapper'

const CardPage = ({ title, body, user, number }) => {
  return (
    <CardWrapper full>
      <Text big>#{number} <a href={user.html_url}>{user.login}</a></Text>
      <Text big>{title}</Text>
      <Text>{body}</Text>
    </CardWrapper>
  );
};

export default CardPage;