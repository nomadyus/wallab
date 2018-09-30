import axios from 'axios'

const bffClient = {
  getItemAvailability: (id) => {
    return {
      available: 'In Dealership'
    };
  },
  getItems: () => {
    return [{
      id: 1,
      img: "http://myfancycar/image",
      name: "My Fancy Car",
      make: "MyMake",
      model: "MyModel",
      year: 2018
    }];
  }
};

export default bffClient