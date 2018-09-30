const fetch = require('cross-fetch');

const {
  API_URL
} = process.env;


const apiUrls = {
  getCars: `${API_URL}/cars`,
  getCarAvailability: (id) => `${API_URL}/availability?id=${id}`,
}

const mapItemWithAvailability = (items) => {
  return Promise.all(items.map((item) => {
    console.debug(`Calling the URL '${apiUrls.getCarAvailability(item.id)}'.`);
    return fetch(apiUrls.getCarAvailability(item.id))
      .then((response) => {
        return response.json();
      })
      .then(({ available }) => {
        return {
          ...item,
          availability: available
        };
      })
      .catch((err) => {throw err});
  }));
};

module.exports = {
  getInventory: (cb) => {
    console.debug(`Calling the URL '${apiUrls.getCars}'.`);
    return fetch(apiUrls.getCars)
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        return mapItemWithAvailability(items);
      })
      .then((completeItems) => {
        return cb(completeItems);
      })
      .catch((err) => {
        console.error('An error occurred: ', err);
        cb({
          msg: 'An error occurred.',
          err: err.message
        });
      });
  }
}