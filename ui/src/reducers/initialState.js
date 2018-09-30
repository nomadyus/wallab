export default {
  sortBy: 'NAME',
  inventory: {
    ui: {
      isFetching: false,
      items: []
    },
    bff: {
      isFetching: false,
      lastUpdates: Date.now(),
      items: [{
          id: 1,
          img: 'http://myfancycar/image',
          name: 'My Fancy Car',
          make: 'MyMake',
          model: 'MyModel',
          year: 2018,
          availability: 'In Dealership'
        },
        {
          id: 1,
          img: 'http://myfancycar/image',
          name: 'My Fancy Car',
          make: 'MyMake',
          model: 'MyModel',
          year: 2018,
          availability: 'In Dealership'
        }
      ]
    }
  }
}