import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListIssues = ({
  issues, children, repo, username,
}) => (
  <Wrapper>
    {issues.length !== 0 &&
        issues.map(el => <Card key={el.id} {...el} repo={repo} username={username} />)}
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
