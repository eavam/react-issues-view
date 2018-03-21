import { compose, branch, renderComponent } from 'recompose';
import ListIssues from './ListIssues';
import withConnnect from '../../hocs/withConnect';
import Loading from '../Loading';

export default compose(
  withConnnect(['issuesIsLoading', 'issues']),
  branch(({ issuesIsLoading }) => issuesIsLoading, renderComponent(Loading)),
)(ListIssues);
