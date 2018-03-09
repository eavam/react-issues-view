import Form from './Form';
import withConnnect from '../../hocs/withConnect';
import { changeUserName, changeRepoName } from '../../ducks/fields';

export default withConnnect(
  [
    'fieldUserName',
    'fieldRepoName',
    'disabledFieldRepoName',
    'autocompliteIds',
    'autocompliteListIsLoading',
  ],
  {
    onChangeUserName: changeUserName,
    onChangeRepoName: changeRepoName,
  },
)(Form);
