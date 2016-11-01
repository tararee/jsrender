var data = {
  people: [{
    name: 'Dan Wahlin',
    shirtColor: 'white'
  }, {
    name: 'John Papa',
    shirtColor: 'black'
  }, {
    name: 'Scott Guthrie',
    shirtColor: 'red'
  }]
};

$('#output').html( $('#template').render(data) );
