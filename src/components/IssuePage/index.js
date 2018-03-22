import { compose, lifecycle, mapProps, branch, renderComponent } from 'recompose';
import IssuePage from './IssuePage';
import Loading from '../Loading';
import withConnect from '../../hocs/withConnect';
import { requestIssuePage } from '../../ducks/issuePage';

export default compose(
  withConnect(['issuePage', 'issuePageIsLoading'], { requestIssuePage }),
  lifecycle({
    componentDidMount() {
      const { id, repoName, userName } = this.props.match.params;

      this.props.requestIssuePage({ id, repoName, userName });
    },
  }),
  branch(({ issuePageIsLoading }) => issuePageIsLoading, renderComponent(Loading)),
  mapProps(({ issuePage, ...props }) => ({ ...issuePage, ...props })),
)(IssuePage);
