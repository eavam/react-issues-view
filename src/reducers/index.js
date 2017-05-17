import {
  REQUEST_ISSUES,
  SUCCESS_ISSUES,
  ADD_ISSUES,
  ERROR_ISSUES,
  CHANGE_SHOW,
  UP_OFFEST,
  SET_USER_NAME,
  SET_REPO,
  SET_AUTOCOMPLITE,
  REQUEST_AUTOCOMPLITE,
  SET_SINGLE_ISSUE
} from '../actions'

const initialState = {
  username: '',
  repo: '',
  issues: [],
  error: {},
  loading: false,
  show: 5,
  page: 1,
  offset: 0,
  next_url: '',
  autocomplite: [],
  autocompliteLoading: false,
  singleIssue: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_ISSUES:
    return {
      ...state,
      loading: true,
      error: {}
    }

  case SUCCESS_ISSUES:
    return {
      ...state,
      loading: false,
      issues: [...action.json],
      page: 2,
      offset: state.show,
      next_url: action.url
    }

  case ERROR_ISSUES:
    return {
      ...state,
      loading: false,
      error: {...action.json}
    }

  case CHANGE_SHOW:
    return {
      ...state,
      show: action.show
    }

  case UP_OFFEST:
    return {
      ...state,
      offset: state.show + state.offset,
      loading: false
    }

  case ADD_ISSUES:
    return {
      ...state,
      issues: [...state.issues,...action.json],
      offset: state.show + state.offset,
      page: state.page + 1,
      loading: false
    }
  
  case SET_USER_NAME:
    return {
      ...state,
      username: action.username,
      repo: ''
    }
  
  case SET_REPO:
    return {
      ...state,
      repo: action.repo,
      issues: []
    }

  case REQUEST_AUTOCOMPLITE:
    return {
      ...state,
      autocompliteLoading: true
    }

  case SET_AUTOCOMPLITE:
    return {
      ...state,
      autocompliteLoading: false,
      autocomplite: [...action.json]
    }

  case SET_SINGLE_ISSUE:
    return {
      ...state,
      singleIssue: action.json
    }

  default:
    return state
  }
}

export default rootReducer