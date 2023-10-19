require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database/mongodb");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API started on port: ${PORT}`);
});

const routes = require("./routes/route");
const adminRoutes = require("./routes/routeAdminPanel");
routes(app);
adminRoutes(app);
