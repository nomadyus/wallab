const initialState = {
  sort: 'Name',
  sortOptions: ['Name', 'Availability'],
  isFetching: false,
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
};

export default initialState;