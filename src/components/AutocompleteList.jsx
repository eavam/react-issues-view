import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  background: #fff;
  margin: 0 10px;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  left: 0;
  right: 0;
  bottom: 12px;
  transform: translateY(100%);
  max-height: 16rem;
  overflow-y: scroll;
`

const Item = styled.div`
  padding: 10px 12px;
  box-shadow: 0 1px 0 rgba(0,0,0,.1);
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,.2)
  }
`

const AutocompeteList = ({ items, setAndSearch }) => {
  return (
    <Wrapper>
      {
        items.map(el => <Item key={el.id} onClick={() => setAndSearch(el.name)} >{el.name}</Item>)
      }
    </Wrapper>
  );
};

export default AutocompeteList;