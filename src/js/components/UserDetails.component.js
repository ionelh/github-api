'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Avatar from './Avatar.component';
import UserName from './UserName.component';
import Repos from './Repos.component';
import Error from './Error.component';
import Spinner from './Spinner.component';

export class UserDetails extends Component {
  getDetailsJSX() {
    let jsx = null;
    const {
      repos,
      reposError,
      isFetching,
      data,
      userDataError
    } = this.props.user;
    
    if (isFetching) {
      jsx = (
        <div className="user-info">
          <Spinner />
        </div>
      );
    } else if (data) {
      const {
        avatar,
        name,
        login,
        htmlUrl
      } = this.props.user.data;
      
      jsx = (
        <div className="user-info">
          <div className="clearfix">
            <div className="pull-left">
              <Avatar
                avatar={avatar}
              />
            </div>
            <div className="pull-left user-name">
              <UserName
                name={name}
                login={login}
                htmlUrl={htmlUrl}
              />
            </div>
          </div>
          <Repos
            repos={repos}
            reposError={reposError}
          />
        </div>
      );
    } else if (userDataError) {
      jsx = (
        <Error
          error={userDataError}
          title="Oups!"
        />
      );
    }
    
    return jsx;
  }
  
  render() {
    return this.getDetailsJSX();
  }
}

UserDetails.propTypes = {
  user: PropTypes.object
};

export default connect((state) => ({
  user: state.user
}))(UserDetails);
