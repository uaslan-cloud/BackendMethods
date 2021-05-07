let express = require('express');
let router = express.Router();

let movieList = [
    {
        "id": 10002,
        "name": "Die Hard",
        "year": "1999",
        "genre": "action",
        "income": 10000000
      },
      {
        "id": 10003,
        "name": "Fast and Furios",
        "year": "2005",
        "genre": "action",
        "income": 200000
      },
      {
        "id": 10004,
        "name": "Harry Potter",
        "year": "2001",
        "genre": "fantastic",
        "income": 50000000
      },
      {
        "id": 10005,
        "name": "The Lord of the Rings",
        "year": "2000",
        "genre": "fantastic",
        "income": 80000000
      }
      
]

const rentMovie=[
  {
    "movieId": 10002,
    "duration": 45,
    "person": "Hi Coders"
 },
 {
  "movieId": 10004,
  "duration": 62,
  "person": "Hi Coders"
},
{
  "movieId": 10005,
  "duration": 10,
  "person": "Hi Coders"
},
]


/* GET home page. */
router.get('/movies/', function(req, res, next) {
  let newArray = JSON.parse(JSON.stringify(movieList))
  let list = newArray.reverse().filter( (o, i) => i<20)
  res.json(list);
});
/*Get rents movie Page*/
router.get('/rents/', function(req, res, next) {
  let newArray = JSON.parse(JSON.stringify(rentMovie))
  let list = newArray.reverse().filter( (o, i) => i<20)
  res.json(list);
});


router.post('/movies/', function(req, res, next) {
    movieList.push(req.body)
  res.sendStatus(200);
});
router.post('/rents/', function(req, res, next) {
  rentMovie.push(req.body)
res.sendStatus(200);
});


module.exports = router;