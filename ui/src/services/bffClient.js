import fetch from 'cross-fetch';

import config from '../config';

const bffClient = {
  getInventory: () => {
    console.debug(`Calling the URL '${config.url}'.`);
    return fetch(config.url)
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.error('An error occurred: ', err);
        return new Error({
          msg: 'An error occurred.',
          err: err.message
        });
      });
  }
};

export default bffClient