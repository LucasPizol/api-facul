require("module-alias/register");
const express = require("express");
const env = require("./config/env.js");
const cors = require("cors")

const { router } = require("./router.js");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(env.port, () => {
  console.log(`Server listening to port ${env.port}`);
});
