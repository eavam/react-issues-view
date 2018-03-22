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

const ListIssues = ({ issuesIds }) => (
  <Wrapper>{issuesIds.map(id => <Card key={id} id={id} />)}</Wrapper>
);

ListIssues.propTypes = {
  issuesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListIssues;
