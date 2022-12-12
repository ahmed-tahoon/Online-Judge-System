const express = require("express")
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require('./routes');
const database = require('./config/Dadabase')

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes)


app.listen(5000,()=>{
    console.log("Server Work in Port  : " , 5000)
})