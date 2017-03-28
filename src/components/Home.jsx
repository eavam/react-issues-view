import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import InputSearch from './InputSearch'
import Button from './Button'
import ListIssues from './ListIssues'
import Loading from './Loading'
import AutocompleteList from './AutocompleteList'
import Select from './Select'
import ErrorMessage from './ErrorMessage'
import {
  searchIssues,
  changeShow,
  nextPage,
  setName,
  setRepo,
  autoComplite,
} from '../actions'

const Form = styled.form`
  display: flex;
  justify-content: center;
`

const AutocompleteWrap = styled.div`
  position: relative;
`

class Home extends Component {

  constructor(props) {
    super()
    this.state = {
      viewComplite: false
    }
    this.searchIsseus = this.searchIsseus.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.repoAutocomplete = this.repoAutocomplete.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeRepo = this.changeRepo.bind(this)
    this.setAndSearch = this.setAndSearch.bind(this)
  }

  searchIsseus(e) {
    e.preventDefault()
    const { dispatch, username, repo } = this.props
    dispatch(searchIssues(username, repo))
  }

  handleSelect(e) {
    const { dispatch } = this.props
    dispatch(changeShow(+e.target.value))
  }

  loadMore() {
    const { dispatch } = this.props
    dispatch(nextPage())
  }

  repoAutocomplete() {
    const { dispatch, repo, username } = this.props
    if(!repo && username) dispatch(autoComplite())
  }

  changeName(e) {
    const { dispatch } = this.props
    dispatch(setName(e.target.value))
  }

  changeRepo(e) {
    const { dispatch, autocompliteLoading } = this.props
    dispatch(setRepo(e.target.value))
    if(!autocompliteLoading) dispatch(autoComplite(e.target.value))
  }

  setAndSearch(repo) {
    this.setState({ viewComplite: false });
    const { dispatch, username } = this.props
    dispatch(setRepo(repo))
    dispatch(searchIssues(username, repo))
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.searchIsseus}>
          <InputSearch
            onChange={this.changeName}
            onBlur={this.repoAutocomplete}
            placeholder='User name'
            required
            value={this.props.username}
          />
          <AutocompleteWrap>
            <InputSearch
              onChange={this.changeRepo}
              onFocus={() => this.setState({ viewComplite: true })}
              placeholder='Repository'
              required
              value={this.props.repo}
              autoComplete='off'
            />
            {
              this.props.autocomplite.length && this.state.viewComplite
              ? <AutocompleteList items={this.props.autocomplite} setAndSearch={this.setAndSearch} />
              : null
            }
          </AutocompleteWrap>
          <div>
            <Select onChange={this.handleSelect} >
              <option value="5">Show by 5</option>
              <option value="15">Show by 15</option>
              <option value="30">Show by 30</option>
            </Select>
          </div>
          <Button>Search</Button>
        </Form>
        <ErrorMessage error={this.props.error} />
        <ListIssues issues={[...this.props.issues].splice(0, this.props.offset)} username={this.props.username} repo={this.props.repo} >
          {
            this.props.issues.length && this.props.offset <= this.props.issues.length && !this.props.loading
            ? <Button onClick={this.loadMore} >Load more</Button>
            : this.props.loading
            ? <Loading />
            : null
          }
        </ListIssues>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    repo: state.repo,
    issues: state.issues,
    error: state.error,
    loading: state.loading,
    offset: state.offset,
    autocomplite: state.autocomplite,
    autocompliteLoading: state.autocompliteLoading
  }
}

export default connect(mapStateToProps)(Home)