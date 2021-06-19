require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;



// DATABASE CONNECTION
const uri = process.env.MONGO_CONNECTION_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database Connected!');
}).catch(err => {
  console.log('Connection failed...', err);
});


// SERVER
const server = app.listen( PORT, ()=>{
  console.log(`Listening at port ${PORT}`);
});