require('dotenv').config();

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(process.env.FILE_PATH)
});

lineReader.on('line', function(line) {
  console.log('Line from file:', line);
});
