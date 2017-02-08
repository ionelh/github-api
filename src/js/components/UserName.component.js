'use strict';

import React, {Component, PropTypes} from 'react';

export class UserName extends Component {  
  render() {
    return (
      <div>
        {this.props.name} (<a href={this.props.htmlUrl} target="_blank">{this.props.login}</a>)
      </div>
    );
  }
}

UserName.propTypes = {
  login: PropTypes.string,
  name: PropTypes.string,
  htmlUrl: PropTypes.string
};

export default UserName;
