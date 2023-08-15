const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// work here
app.use("/admin", adminRoutes);

// not use
app.use(shopRoutes);
app.use(errorController.get404);

// associations

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
