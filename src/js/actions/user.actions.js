'use strict';

import Api from './../services/Api.service';

export const REQUEST = 'REQUEST';
export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR';
export const SET_USER_REPOS = 'SET_USER_REPOS';
export const SET_USER_REPOS_ERROR = 'SET_USER_REPOS_ERROR';

const setUserData = (user) => ({
  type: SET_USER_DATA,
  payload: {
    name: user.name,
    avatar: user.avatar_url,
    login: user.login,
    htmlUrl: user.html_url
  }
});

const setUserError = (error) => ({
  type: SET_USER_DATA_ERROR,
  payload: {
    error: {
      documentationUrl: error.documentation_url,
      message: error.message
    }
  }
});

const setUserRepos = (repos) => ({
  type: SET_USER_REPOS,
  payload: {
    repos
  }
});

const setUserReposError = (error) => ({
  type: SET_USER_REPOS_ERROR,
  payload: {
    error: {
      documentationUrl: error.documentation_url,
      message: error.message
    }
  }
});

const getRepos = (url) => (
  (dispatch, getState) => {
    Api.getRepos(url)
      .then((response) => {
        const repos = {};
        response.forEach((repo) => {
          repos[repo.id] = {
            name: repo.name,
            htmlUrl: repo.html_url
          };
        });
        dispatch(setUserRepos(repos));
      })
      .catch((err) => {
        dispatch(setUserReposError(err));
      });
  }
);

const requestUser = () => ({
  type: REQUEST
});

export const getUser = (username) => (
  (dispatch, getState) => {
    dispatch(requestUser());
    
    Api.getUser(username)
      .then((response) => {
        dispatch(getRepos(response.repos_url));
        dispatch(setUserData(response));
      })
      .catch((err) => {
        dispatch(setUserError(err));
      });
  }
);
