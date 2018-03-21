import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Card from '../Card';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ListIssues = ({
  issues, children, repo, username,
}) => (
  <Wrapper>
    {issues.map(issue => <Card key={issue.id} repo={repo} username={username} {...issue} />)}
    {children}
  </Wrapper>
);

ListIssues.propTypes = {
  issues: PropTypes.array,
  children: PropTypes.element,
  repo: PropTypes.string,
  username: PropTypes.string,
};

export default ListIssues;
