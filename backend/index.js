const express = require("express");
const app = express();

const routes = require("./src/routes/index");
const port = 8080;

app.use(routes);

app.listen(port, () => {
  console.log(`Example app  on port ${port}`);
});
