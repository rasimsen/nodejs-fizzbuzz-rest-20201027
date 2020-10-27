const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

const routes = require("./fizzbuzz-routes");

routes(app);

app.listen(port, function () {
  console.log("Server started on port:" + port);
});
