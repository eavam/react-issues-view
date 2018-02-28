import React from 'react';
import styled from 'react-emotion';
import withConnnect from '../../hocs/withConnect';
import { Input } from '../baseComponents';
import AutocompleteInput from '../AutocompleteInput';
import AutocompleteList from '../AutocompleteList';
import Loading from '../Loading';
import { changeUserName, changeRepoName } from '../../ducks/fields';

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
  autocompliteList,
}) => (
  <Root>
    <Input onChange={onChangeUserName} value={fieldUserName} placeholder="User name" required />
    <AutocompleteInput
      onChange={onChangeRepoName}
      value={fieldRepoName}
      placeholder="Repository"
      autoComplete="off"
      disabled={disabledFieldRepoName}
      required
    >
      {autocompliteListIsLoading ? <Loading /> : <AutocompleteList items={autocompliteList} />}
    </AutocompleteInput>
  </Root>
);

export default withConnnect(
  [
    'fieldUserName',
    'fieldRepoName',
    'disabledFieldRepoName',
    'autocompliteList',
    'autocompliteListIsLoading',
  ],
  {
    onChangeUserName: changeUserName,
    onChangeRepoName: changeRepoName,
  },
)(Form);
