import React from 'react';
import styled from 'react-emotion';
import { Input } from '../baseComponents';
import AutocompleteInput from '../AutocompleteInput';
import AutocompleteList from '../AutocompleteList';

const Root = styled('div')`
  display: flex;
  justify-content: center;
`;

const Form = ({
  fieldUserName,
  fieldRepoName,
  onChangeUserName,
  onChangeRepoName,
  disabledFieldRepoName,
  autocompliteListIsLoading,
  autocompliteIds,
}) => (
  <Root>
    <Input onChange={onChangeUserName} value={fieldUserName} placeholder="User name" required />
    <AutocompleteInput
      required
      autoComplete="off"
      placeholder="Repository"
      value={fieldRepoName}
      onChange={onChangeRepoName}
      disabled={disabledFieldRepoName}
    >
      <AutocompleteList items={autocompliteIds} isLoading={autocompliteListIsLoading} />
    </AutocompleteInput>
  </Root>
);

export default Form;
