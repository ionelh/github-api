'use strict';

const BASE_PATH = 'https://api.github.com/';

const Api = (() => {
  const call = (url, options = {}) => (
    new Promise((resolve, reject) => {
      fetch(url, options)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            response.json()
              .then(jsonResponse => {
                resolve(jsonResponse);
              })
              .catch(ex => {
                reject(ex);
              });
          } else {
            response.json()
              .then(jsonResponse => {
                reject(jsonResponse);
              })
              .catch(ex => {
                reject(ex);
              });
          }
        }, reason => {
          reject(reason);
        })
        .catch(ex => {
          reject(ex);
        });
    })
  );
  
  return {
    getRepos: (url) => (
      call(url)
    ),
    getUser: (username) => (
      call(`${BASE_PATH}users/${username}`)
    )
  };
})();

export default Api;
