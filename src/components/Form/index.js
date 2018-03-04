import Form from './Form';
import withConnnect from '../../hocs/withConnect';
import { changeUserName, changeRepoName } from '../../ducks/fields';

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
