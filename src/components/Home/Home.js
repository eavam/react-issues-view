import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListIssues from '../ListIssues';
import Loading from '../Loading';
import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import Form from '../Form';
import { nextPage } from '../../actions';

class Home extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    issues: PropTypes.array.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool,
    offset: PropTypes.number,
    loadMore: PropTypes.func,
  };

  renderListItems() {
    const {
      issues, offset, loading, loadMore,
    } = this.props;
    return (
      !!(offset <= issues.length && issues.length && !loading) && (
        <Button onClick={loadMore}>Load more</Button>
      )
    );
  }

  renderLoading() {
    const { loading } = this.props;
    return loading && <Loading />;
  }

  render() {
    const {
      issues, offset, error, username, repo,
    } = this.props;
    const issuesOffset = [...issues].splice(0, offset);

    return (
      <div>
        <Form />
        {/* {error.message && <ErrorMessage message={error.message} />}
        <ListIssues issues={issuesOffset} username={username} repo={repo}>
          {this.renderListItems()}
          {this.renderLoading()}
        </ListIssues> */}
      </div>
    );
  }
}

function mapStateToProps({ rootReducer }) {
  return {
    username: rootReducer.username,
    repo: rootReducer.repo,
    issues: rootReducer.issues,
    error: rootReducer.error,
    loading: rootReducer.loading,
    offset: rootReducer.offset,
  };
}

function mapDispathToProps(dispatch) {
  return {
    loadMore() {
      dispatch(nextPage());
    },
  };
}

export default connect(mapStateToProps, mapDispathToProps)(Home);
