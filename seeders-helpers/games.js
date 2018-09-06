/* Current settings make 5 calls to retrieve 50 games each. To change the
 * amount of calls, change the call to getRandFifty(x) where x is the amount of
 * calls. This file creates a game list in the path defined by FILE_PATH in
 * your .env file.
 */


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
    // create a new file, or overwrite old one
    fs.writeFileSync(path, '', err => {
      if (err) {
        return console.log(err);
      }
      else {
        console.log('New Game List Created!');
      }
    });
    // add a game title at each line
    gamesList.forEach( gameName => {
      fs.appendFileSync(path, gameName + '\n');
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

getRandFifty(5);
