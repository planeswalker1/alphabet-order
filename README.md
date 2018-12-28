# _alphabet-order_

#### _api programming challenge, 12.27.2018_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about apis, completed using express._

## challenge

Create an api that should return the position of a lowercase letter in the alphabet when a user goes to '/' and that chosen letter. Respond with an error message if the endpoint is not a lower case letter.

**Function Description**

Use a for loop to create an array with each lowercase letter in the alphabet. The resulting array should be ['a', 'b', 'c', ... x, 'y', 'z']

Use a for loop to generate an app.get function for each endpoint. The callback function should res.send the letter's index in the alphabet

The first endpoint should be:

```javascript
app.get('/a', function(req, res) {
  res.send("1");
 });
 ```

**Constraints**

Do not use:

* block scoped variables (let)
* Array.prototype.forEach()

**Output Format**

respond with the position of the lowercase letter in the alphabet; otherwise, respond with an error message.

**Sample Url**

```
'/b'
```

**Sample Response**

```
'2'
```

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open app.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_
_Node_