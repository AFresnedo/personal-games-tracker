// for igdb api key
require('dotenv').config();

// internet game database api wrapper
const igdb = require('igdb-api-node').default;
const client = igdb(process.env.IGDB_API_KEY);

// nodeJS filesystem I/O
let fs = require('fs');
let path = process.env.FILE_PATH;

// list of real game names
let gamesList = [];

// adds 50 random game titles "times" times
function getRandFifty(callsRemaining) {
  // count as "one more time"
  if (callsRemaining <= 0) {
    // done
    // TODO call seeder
    console.log(gamesList);
    fs.writeFile(path, gamesList, err => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log('file saved!');
      }
    });
  }
  else {
    // add 50 more game titles to the list
    // refer to https://github.com/igdb/igdb-api-node
    client.games({
      fields: '*',
      limit: 50,
      offset: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10)
    }, [ 'name' ]).then( res => {
      // res.body is an array of objects with the "id" and "name" keys
      res.body.forEach( (obj) => {
        gamesList.push(obj.name);
      });
      getRandFifty(callsRemaining - 1);
    }).catch( err => {
      console.log(err);
    });
  }
}

getRandFifty(2);

async function asyncRandFifty() {
}
