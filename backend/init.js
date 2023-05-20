require('dotenv').config()
const mongoose = require("mongoose");
const express = require('express')
const router = require('./router').default
const app = express()


// CONSTANTS 
const PORT = process.env.EXPRESS_PORT || 8000


// mongodb connection.
exports.connect = () => {
    const res = mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_STRING}/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    );
    res
      .then((res) => console.log("connected to mongodb+srv:", res))
      .catch((error) => console.log(error.message));
  };
  

// express

// ** ENABLE CORS FOR ALL ROUTES 
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace * with the allowed origin(s) if needed
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// UTC+5:30 (Indian Standard Time)
const timeZoneOffset = 330; // Offset in minutes
const serverTimeZone = new Date().getTimezoneOffset() + timeZoneOffset;

// Middleware to set the time zone for each request
app.use((req, res, next) => {
  req.serverTimeZone = serverTimeZone;
  next();
});

  
app.use(express.json())
app.use('/user', router)
app.listen(PORT, () => {console.log(`Express Listeing on port ${PORT}`)})


