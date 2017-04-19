
export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const SUCCESS_ISSUES = 'SUCCESS_ISSUES'
export const ADD_ISSUES = 'ADD_ISSUES'
export const ERROR_ISSUES = 'ERROR_ISSUES'
export const CHANGE_SHOW = 'CHANGE_SHOW'
export const NEXT_PAGE = 'NEXT_PAGE'
export const UP_OFFEST = 'UP_OFFEST'
export const SET_USER_NAME = 'SET_USER_NAME'
export const SET_REPO = 'SET_REPO'
export const SET_AUTOCOMPLITE = 'SET_AUTOCOMPLITE'
export const REQUEST_AUTOCOMPLITE = 'REQUEST_AUTOCOMPLITE'
export const SET_SINGLE_ISSUE = 'SET_SINGLE_ISSUE'

function requestIssues() {
  return {
    type: REQUEST_ISSUES
  }
}

function successIssues(json, url) {
  return {
    type: SUCCESS_ISSUES,
    json,
    url
  }
}

function addIssues(json) {
  return {
    type: ADD_ISSUES,
    json,
  }
}

function errorIssues(json) {
  return {
    type: ERROR_ISSUES,
    json
  }
}

function upOffset() {
  return {
    type: UP_OFFEST
  }
}

function requsetAutocomplite() {
  return {
    type: REQUEST_AUTOCOMPLITE,
  }
}

function setAutoCompite(json) {
  return {
    type: SET_AUTOCOMPLITE,
    json
  }
}

function setSingleIssue(json) {
  return {
    type: SET_SINGLE_ISSUE,
    json
  }
}

export function searchIssues() {
  return async (dispatch, getState) => {
    const { username, repo } = getState()
    dispatch(requestIssues())
    const url = `https://api.github.com/repos/${username}/${repo}/issues`
    const res = await fetch(url)
    const json = await res.json()

    res.status === 200
    ? dispatch(successIssues(json, url))
    : dispatch(errorIssues(json))

  }
}

export function nextPage() {
  return async(dispatch, getState) => {
    const { issues, page, next_url, offset, show } = getState()
    dispatch(requestIssues())
    if( offset + show <= issues.length ) {
      dispatch(upOffset())
    } else {
      const res = await fetch(`${next_url}?page=${page}`)
      const json = await res.json()
      dispatch(addIssues(json))
    }
  }
}

export function autoComplite(search = '') {
  return async (dispatch, getState) => {
    const { username, autocompliteLoading } = getState()
    if(username && !autocompliteLoading) {
      dispatch(requsetAutocomplite())
      const res = await fetch(`https://api.github.com/search/repositories?q=${search}+user:${username}&sort=updated`)
      const json = await res.json()
      dispatch(setAutoCompite(json.items))
    }
  }
}

export function fetchSingleIssue({ username, repo, number }) {
  return async (dispatch) => {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}/issues/${number}`)
    const json = await res.json()
    dispatch(setSingleIssue(json))
  }
}

export function changeShow(show) {
  return {
    type: CHANGE_SHOW,
    show
  }
}

export function setName(username) {
  return {
    type: SET_USER_NAME,
    username
  }
}

export function setRepo(repo) {
  return {
    type: SET_REPO,
    repo
  }
}