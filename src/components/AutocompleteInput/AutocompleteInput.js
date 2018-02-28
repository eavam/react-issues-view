import React from 'react';
import { Input, Dropdown } from '../baseComponents';

const AutocompleteInput = ({ children, ...props }) => (
  <Dropdown>
    <Dropdown.Anchor refPropName="innerRef">
      <Input {...props} />
    </Dropdown.Anchor>
    <Dropdown.Content>{children}</Dropdown.Content>
  </Dropdown>
);

export default AutocompleteInput;
