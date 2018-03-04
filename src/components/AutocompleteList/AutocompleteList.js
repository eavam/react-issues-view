import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Item = styled('div')`
  padding: 10px 12px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  word-wrap: break-word;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const AutocompeteList = ({ items, handleSearch }) => (
  <Fragment>
    {items.map(el => (
      <Item key={el.id} onClick={() => handleSearch(el.name)}>
        {el.name}
      </Item>
    ))}
  </Fragment>
);

AutocompeteList.propTypes = {
  items: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default AutocompeteList;
