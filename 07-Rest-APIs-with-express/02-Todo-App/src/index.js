const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require("dotenv");

const { PORT } = require("./config/server.config");
const homePingController = require("./controllers/home.controller");
const router = require("./routes");
const customRouter = require("./routes/customRouter");

const app = express();
// dotenv.config();

// const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ msg: "ok" });
});

// app.get("/home", (req, res) => {
//   return res.json({ msg: "Welcome home" });
// });
// app.get("/home", homePingController);
// app.use(router);
app.use("/", router);
app.use("/custom", customRouter); //localhost:4000/custom/custom2

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
