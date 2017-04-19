import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import CardPage from './CardPage'
import { fetchSingleIssue } from '../actions'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

class IssuePage extends Component {

  componentDidMount() {
    this.props.fetchSingleIssue()
  }

  render() {
    return (
      <Wrapper>
        {
          (+this.props.match.params.number === this.props.singleIssue.number)
          && <CardPage {...this.props.singleIssue} />
        }
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleIssue: state.singleIssue
  }
}

function mapDispathToProps(dispatch, props) {
  return {
    fetchSingleIssue() {
      dispatch(fetchSingleIssue(props.match.params))
    },
  }
}

export default connect(mapStateToProps, mapDispathToProps)(IssuePage)