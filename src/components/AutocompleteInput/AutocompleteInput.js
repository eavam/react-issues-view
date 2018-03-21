import React from 'react';
import { Input, Dropdown } from '../baseComponents';

const AutocompleteInput = ({
  children, isOpen, onRef, ...props
}) => (
  <Dropdown>
    <Dropdown.Anchor refPropName="innerRef">
      <Input {...props} />
    </Dropdown.Anchor>
    <Dropdown.Content isOpen={isOpen} onRef={onRef}>
      {children}
    </Dropdown.Content>
  </Dropdown>
);

export default AutocompleteInput;
