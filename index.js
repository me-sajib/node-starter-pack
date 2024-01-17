require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/users.route");
const app = express();
var bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(userRoute);

app.use((req, res) => {
  res.send({
    success: "Fail",
    error: "No route match",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Running port on ", process.env.PORT || 4000);
});
