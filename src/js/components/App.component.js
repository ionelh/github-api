'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Api from './../services/Api.service';
import Search from './Search.component';
import UserDetails from './UserDetails.component';

export class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Search />
        <UserDetails />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
