require('dotenv').config();
const app = require ('./app.js');
const port = process.env.PORT;
app.listen(port, () =>{
  console.log(`Listening on port ${port}`);
});