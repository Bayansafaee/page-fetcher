const request = require('request');
const fs = require('fs');
const arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
  if (error !== null) {
    console.log('error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(arg[0], body, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf-8')} bytes to ${arg[1]}`);
    }
  });
});