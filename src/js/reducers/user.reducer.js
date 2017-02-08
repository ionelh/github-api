'use strict';

import {
  REQUEST,
  SET_USER_DATA,
  SET_USER_DATA_ERROR,
  SET_USER_REPOS,
  SET_USER_REPOS_ERROR
} from './../actions/user.actions';

const DEFAULT_STATE = {
  data: null,
  repos: null,
  userDataError: null,
  reposError: null,
  isFetching: false
};

const user = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    
    case SET_USER_DATA:
      return Object.assign({}, state, {
        data: {
          name: action.payload.name,
          avatar: action.payload.avatar,
          login: action.payload.login,
          htmlUrl: action.payload.htmlUrl
        },
        userDataError: null
      });
    
    case SET_USER_DATA_ERROR:
      return Object.assign({}, state, {
        userDataError: action.payload.error,
        isFetching: false,
        repos: null,
        data: null
      });
    
    case SET_USER_REPOS:
      return Object.assign({}, state, {
        repos: action.payload.repos,
        isFetching: false
      });
    
    case SET_USER_REPOS_ERROR:
      return Object.assign({}, state, {
        reposError: action.payload.error,
        isFetching: false,
        repos: null
      });
    
    default:
      return state;
  }
};

export default user;
