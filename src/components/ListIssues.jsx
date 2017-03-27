import React from 'react';
import styled from 'styled-components'
import Card from './Card'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListIssues = ({ issues, children, repo, username }) => {
  return (
    <Wrapper>
      {
        issues.length
        ? issues.map(el => <Card key={el.id} {...el} repo={repo} username={username} />)
        : null
      }
      {children}
    </Wrapper>
  );
};

export default ListIssues;