'use strict';

import React, {Component, PropTypes} from 'react';

export class Spinner extends Component {  
  render() {
    return (
      <div className="loader-circle" />
    );
  }
}

Spinner.propTypes = {};

export default Spinner;
