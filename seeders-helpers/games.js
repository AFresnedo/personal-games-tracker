// for igdb api key
require('dotenv').config();

// internet game database api wrapper
const igdb = require('igdb-api-node').default;
const client = igdb(process.env.IGDB_API_KEY);

client.games({
  fields: '*',
  limit: 50,
  offset: Math.floor(Math.random() * 100) + Math.floor(Math.random() * 10)
}, [ 'name' ]).then( res => {
  console.log(res);
}).catch( err => {
  console.log(err);
});

// client.games({
  // fields: '*', // Return all fields
  // limit: 5, // Limit to 5 results
  // offset: 15 // Index offset for results
// }).then(response => {
  // // response.body contains the parsed JSON response to this query
  // console.log(response);
// }).catch(error => {
  // throw error;
// });
