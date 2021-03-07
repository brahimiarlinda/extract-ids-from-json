const obj = require('./data.json');
const fs = require('fs');

const resp = obj.response.buildings.map( x => x.id); // replace buildings with sites for testing the sites

fs.writeFile('input.txt', resp, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Data written successfully!');
    console.log('Let\'s read newly written data');
    // Read the newly written file and print all of its content on the console
    fs.readFile('input.txt', function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log('Asynchronous read: ' + data.toString());
    });
  });