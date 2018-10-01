# Architecture Discussion
Included here are some notes and thoughts used during the assessment process as requested.

## FancyCars.com
A very simple website that uses React and Redux to display available vehicles for a dealership.
It performs the following tasks:
- Show 10 cars and for each car it shows the car details (picture, name, make, model and availability of the car).
- Has a Sort Dropdown which can sort the results by both the name and availability of the car.
- Shows a buy button that only shows up if Availability is "In Dealership"
- Is mobile optimized and responsive
- Does no use any third party CSS themes or libraries for styling.

The site is structured in 3 parts (the UI, the BFF, and the API). The API has the following endpoints:
- GET /availability?id=123
  RESPONSE: {available: "In Dealership"}  with other available options [ "Out of Stock", "Unavailable"]
- GET /cars
  RESPONSE:  [ {id: 1, img: http://myfancycar/image, name: "My Fancy Car", make: "MyMake", model: "MyModel", year: 2018} ...]


## Walmart.ca website
The **Architecture Diagram** for the site is provided in `/doc/Architecture Diagram.pdf` and it shows some of the ways the architecture of Walmart.ca site can be updated.
