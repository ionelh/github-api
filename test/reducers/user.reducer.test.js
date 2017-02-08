'use strict';

import {expect} from 'chai';

import user from './../../src/js/reducers/user.reducer';
import {
  REQUEST,
  SET_USER_DATA,
  SET_USER_DATA_ERROR,
  SET_USER_REPOS,
  SET_USER_REPOS_ERROR
} from './../../src/js/actions/user.actions';

describe('user reducer', () => {
  let initialState;
  let expectedState;
  let action = {};
  
  beforeEach(() => {
    initialState = {
      data: null,
      repos: null,
      userDataError: null,
      reposError: null,
      isFetching: false
    };
  });
  
  describe('when an unknown action is dispatched', () => {
    it('should return the default state', () => {
      action.type = '3uoirjfwlnfkc';
      expect(user(initialState, action)).to.equal(initialState);
    });
  });
  
  describe('when REQUEST action is dispatched', () => {
    beforeEach(() => {
      action.type = REQUEST;
      
      expectedState = {
        data: null,
        repos: null,
        userDataError: null,
        reposError: null,
        isFetching: true
      };
    });
    
    it('should not mutate state', () => {
      expect(user(initialState, action)).to.not.equal(initialState);
    });
    
    it('should set isFetching to true', () => {
      expect(user(initialState, action)).to.deep.equal(expectedState);
    });
  });
  
  describe('when SET_USER_DATA action is dispatched', () => {
    beforeEach(() => {
      action = {
        type: SET_USER_DATA,
        payload: {
          name: '34iroewfhdsx',
          avatar: '45387eru9wdhkjbfdjns',
          login: 'yur3uefihdjnsjkdbf',
          htmlUrl: '38749yruedjknskmlljm'
        }
      };
      
      expectedState = {
        data: {
          name: action.payload.name,
          avatar: action.payload.avatar,
          login: action.payload.login,
          htmlUrl: action.payload.htmlUrl
        },
        repos: null,
        userDataError: null,
        reposError: null,
        isFetching: false
      };
      
      initialState.userDataError = '34r87ei8uisdcbmn0987uyghvb';
    });
    
    it('should not mutate state', () => {
      expect(user(initialState, action)).to.not.equal(initialState);
    });
    
    it('should set userDataError to null and data to the data in the action payload', () => {
      expect(user(initialState, action)).to.deep.equal(expectedState);
    });
  });
  
  describe('when SET_USER_DATA_ERROR action is dispatched', () => {
    beforeEach(() => {
      action = {
        type: SET_USER_DATA_ERROR,
        payload: {
          error: '2r7eq8wouilkajhdsbscnaoiyu'
        }
      };
      
      expectedState = {
        data: null,
        repos: null,
        userDataError: action.payload.error,
        reposError: null,
        isFetching: false
      };
      
      initialState.isFetching = true;
      initialState.repos = '43898oruiyekhjfgdksl';
      initialState.data = '982ior3uhekwjbdnls';
    });
    
    it('should not mutate state', () => {
      expect(user(initialState, action)).to.not.equal(initialState);
    });
    
    it('should set isFetching to false, data to null, repos to null and userDataError to the userDataError in the action payload', () => {
      expect(user(initialState, action)).to.deep.equal(expectedState);
    });
  });
  
  describe('when SET_USER_REPOS action is dispatched', () => {
    beforeEach(() => {
      action = {
        type: SET_USER_REPOS,
        payload: {
          repos: '345987rew98weiufkbdjsl23iruyeg'
        }
      };
      
      expectedState = {
        data: null,
        repos: action.payload.repos,
        userDataError: null,
        reposError: null,
        isFetching: false
      };
      
      initialState.isFetching = true;
    });
    
    it('should not mutate state', () => {
      expect(user(initialState, action)).to.not.equal(initialState);
    });
    
    it('should set isFetching to false and repos to the repos in the action payload', () => {
      expect(user(initialState, action)).to.deep.equal(expectedState);
    });
  });
  
  describe('when SET_USER_REPOS_ERROR action is dispatched', () => {
    beforeEach(() => {
      action = {
        type: SET_USER_REPOS_ERROR,
        payload: {
          error: '34erw8oudijlskbfjsd,nk.m'
        }
      };
      
      expectedState = {
        data: null,
        repos: null,
        userDataError: null,
        reposError: action.payload.error,
        isFetching: false
      };
      
      initialState.isFetching = true;
      initialState.repos = '23879oequwiadhskjnm';
    });
    
    it('should not mutate state', () => {
      expect(user(initialState, action)).to.not.equal(initialState);
    });
    
    it('should set isFetching to false, repos to null and reposError to the error in the action payload', () => {
      expect(user(initialState, action)).to.deep.equal(expectedState);
    });
  });
});
