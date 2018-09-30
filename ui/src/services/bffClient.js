// import axios from 'axios'
// import fetch from 'cross-fetch'

const bffClient = {
  getInventory: () => Promise.resolve([{
      id: 1,
      img: 'http://myfancycar/image',
      name: 'A',
      make: 'MyMake',
      model: 'MyModel',
      year: 2018,
      availability: 'B'
    },
    {
      id: 2,
      img: 'http://myfancycar/image',
      name: 'B',
      make: 'MyMake2',
      model: 'MyModel2',
      year: 2010,
      availability: 'A'
    }
  ])
};

export default bffClient