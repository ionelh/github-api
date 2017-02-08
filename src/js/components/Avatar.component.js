'use strict';

import React, {Component, PropTypes} from 'react';

export class Avatar extends Component {
  getRenderContent() {
    let renderContent = null;
    
    if (this.props.avatar) {
      renderContent = (
        <div>
          <img src={this.props.avatar} className="avatar" />
        </div>
      );
    }
    
    return renderContent;
  }
  
  render() {
    return this.getRenderContent();
  }
}

Avatar.propTypes = {
  avatar: PropTypes.string
};

export default Avatar;
