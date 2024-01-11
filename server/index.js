process.env.NODE_OPTIONS = '--inspect';

require('dotenv').config();
const app = require ('./app.js');
const port = process.env.PORT;

debugger;
app.listen(port, () =>{
  console.log(`Listening on port ${port}`);
});