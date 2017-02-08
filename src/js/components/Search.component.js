'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getUser} from './../actions/user.actions';

export class Search extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(evt) {
    // Return key unicode is 13
    if (evt.which === 13) {
      this.props.dispatch(getUser(evt.target.value));
    }
  }
  
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Github users"
          onKeyPress={this.handleKeyPress}
          disabled={this.props.isFetching}
        />
      </div>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
};

export default connect((state) => ({
  isFetching: state.user.isFetching
}))(Search);
