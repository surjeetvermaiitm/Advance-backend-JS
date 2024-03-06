const express = require('express');
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const bodyParser = require("body-parser");
const router=express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRouter); // localhost:3000/api/home

app.get("/", (req, res) => {
    return res.json({ msg: "ok" });
  });
app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});

/**
 * How will u manage these kind of routes using express router ? 
 * 
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 *  localhost:3000/api/v2/categories/:id
 * localhost:3000/api/v2/users/:id
 */