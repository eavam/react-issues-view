import { compose, branch, renderComponent, renderNothing } from 'recompose';
import InfinityScroll from './InfinityScroll';
import withConnect from '../../hocs/withConnect';
import Loading from '../Loading';
import { requestNextPageIssues } from '../../ducks/issues';

export default compose(
  withConnect(['infinityScrollIsLoading', 'page'], { onClick: requestNextPageIssues }),
  branch(({ page }) => page === 1, renderNothing),
  branch(({ infinityScrollIsLoading }) => infinityScrollIsLoading, renderComponent(Loading)),
)(InfinityScroll);
