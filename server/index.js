const express = require('express')
const mongoose = require('mongoose');
const postRoutes = require('./routes/posts')
const cors = require('cors');
const keys = require("./config/keys")

const app = express()
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());



app.use('/', postRoutes)

const CONNECT_URL = keys.mongoKey;

mongoose.connect(CONNECT_URL, { useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => console.log("MONGO CONNECTED"))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

app.listen(port, () => {
  console.log(`We at http://localhost:${port}`)
});