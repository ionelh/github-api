'use strict';

import React, {Component, PropTypes} from 'react';
import Error from './Error.component';

export class Repos extends Component {
  getNumberOfRepos() {
    if (this.props.repos) {
      return Object.keys(this.props.repos).length;
    }
    
    return null;
  }
  
  getReposJSX() {
    let jsx = null;
    
    if (this.props.repos) {
      if (this.getNumberOfRepos() === 0) {
        jsx = <h3>This user has no repos</h3>;
      } else {
        jsx = Object.keys(this.props.repos).map((repo, index) => (
          <li key={index}>
            <a href={this.props.repos[repo].htmlUrl} target="_blank">
              {this.props.repos[repo].name}
            </a>
          </li>
        ));
      }
    } else if (this.props.reposError) {
      jsx = (
        <Error
          error={this.props.reposError}
          title="Failed to load repos"
        />
      );
    }
    
    return jsx;
  }
  
  render() {
    return (
      <ul>
        {this.getReposJSX()}
      </ul>
    );
  }
}

Repos.propTypes = {
  repos: PropTypes.object,
  reposError: PropTypes.object
};

export default Repos;
