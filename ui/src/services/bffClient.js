// import axios from 'axios'
// import fetch from 'cross-fetch'

const bffClient = {
  getInventory: () => Promise.resolve([{
      id: 1,
      img: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
      name: 'A',
      make: 'MyMake',
      model: 'MyModel',
      year: 2018,
      availability: 'B'
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
      name: 'B',
      make: 'MyMake2',
      model: 'MyModel2',
      year: 2010,
      availability: 'A'
    }
  ])
};

export default bffClient