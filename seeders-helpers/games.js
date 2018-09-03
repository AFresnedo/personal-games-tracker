// for igdb api key
require('dotenv').config();

// internet game database api wrapper
const igdb = require('igdb-api-node').default;
const client = igdb(process.env.IGDB_API_KEY);

// data structure for real game names

// returns an api response for 50 "random" game names
function getRandFifty() {
  // refer to https://github.com/igdb/igdb-api-node
  client.games({
    fields: '*',
    limit: 50,
    offset: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10)
  }, [ 'name' ]).then( res => {
    console.log(res);
  }).catch( err => {
    console.log(err);
  });
}

getRandFifty();
getRandFifty();
