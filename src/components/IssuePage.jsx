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
    const { dispatch, match } = this.props
    dispatch(fetchSingleIssue(match.params))
  }

  render() {
    return (
      <Wrapper>
        {
          +this.props.match.params.number === this.props.singleIssue.number
          ? <CardPage {...this.props.singleIssue} />
          : null
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

export default connect(mapStateToProps)(IssuePage)