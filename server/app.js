require('dotenv').config();
require('express-async-errors');

const cors = require("cors");
const express = require('express');
const app = express();
const router = require("./routes/index")
app.use(cors());
app.use(express.json());


// database
const connectDB = require('./db/connect');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// routes
app.use (router);


app.get('/', (req, res) => {
  res.send('<h1>Tinder</h1>');
});

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
