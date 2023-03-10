// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

require('dotenv').config();

// const MONGO_URI = require("../utils/consts");

mongoose
  .connect(`mongodb+srv://msdiaz18:${process.env.MONGOPASSWORD}@shopbox1.pzl0hf7.mongodb.net/?retryWrites=true&w=majority`)
  .then(x => console.log(`Connected the Database: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// mongoose
//   .connect(MONGO_URI)
//   .then((x) => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });
