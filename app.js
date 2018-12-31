// task:
// use a for loop to create an array with each lowercase letter in the alphabet
// resulting array should be ['a', 'b', 'c', ... x, 'y', 'z']

// use a for loop to generate an app.get function for each endpoint
// callback function should res.send the letter's index in the alphabet
// do not use block scoped variables (let)
// do not use Array.prototype.forEach()
// first endpoint should be:
// app.get('/a', function(req, res) {
  // res.send("1");
//  });

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  return res.send('Welcome to alphabet order go to / and any letter to see the index of that letter');
});

// pseudo code:
// loop through char codes for the letter a -z
  // change character code into its string and push into array
let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}

// pseudo code:
// we have an array of letters
// loop
  // use a closure to save i variable
  // return an app.get function for each letter endpoint that responds with the position of the letter in the alphabet
for (var i = 0; i < alphabet.length; i++) {
    (function (item, index) {
        return app.get('/' + item, function (req, res) {
            return res.send(String(index));
        });
    })(alphabet[i], i + 1);
}

app.use(function (req, res) {
  return res.status(404).send('uh, that page doesn\'t exist try going to /a');
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});