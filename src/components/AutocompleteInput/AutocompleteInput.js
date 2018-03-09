import React from 'react';
import { Input, Dropdown } from '../baseComponents';

const AutocompleteInput = ({ children, isOpen, ...props }) => (
  <Dropdown>
    <Dropdown.Anchor refPropName="innerRef">
      <Input {...props} />
    </Dropdown.Anchor>
    <Dropdown.Content isOpen={isOpen}>{children}</Dropdown.Content>
  </Dropdown>
);

export default AutocompleteInput;
