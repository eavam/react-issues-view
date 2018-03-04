import React from 'react';
import { Input, Dropdown } from '../baseComponents';

const AutocompleteInput = ({ children, isOpenContent, ...props }) => (
  <Dropdown>
    <Dropdown.Anchor refPropName="innerRef">
      <Input {...props} />
    </Dropdown.Anchor>
    <Dropdown.Content isOpen={isOpenContent}>{children}</Dropdown.Content>
  </Dropdown>
);

export default AutocompleteInput;
