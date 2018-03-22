import { compose, mapProps } from 'recompose';
import withConnect from '../../hocs/withConnect';
import Card from './Card';

export default compose(
  withConnect(['issueById', 'fieldUserName', 'fieldRepoName']),
  mapProps(({ id, issueById, ...props }) => {
    const {
      title, user, created_at, number,
    } = issueById(id);
    return {
      number,
      title,
      user,
      created: created_at,
      ...props,
    };
  }),
)(Card);
