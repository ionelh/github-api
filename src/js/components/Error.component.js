'use strict';

import React, {Component, PropTypes} from 'react';

export class Error extends Component {
  render() {
    const {
      error,
      title
    } = this.props;
    
    return (
      <div className="clearfix user-info">
        <h3>{title}</h3>
        <p>
          {error.message} -&nbsp;
          <a href={error.documentationUrl} target="_blank">{error.documentationUrl}</a>
        </p>
      </div>
    );
  }
}

Error.propTypes = {
  error: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default Error;
