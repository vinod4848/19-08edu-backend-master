const mongoose = require("mongoose");

const { DATABASE_URL, DATABASE_NAME } = process.env;
const connectionString = `${DATABASE_URL}/${DATABASE_NAME}`;

const databaseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(connectionString, databaseOptions);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error in connecting database:", error);
});

db.once("open", () => {
  console.log("Database successfully connected.");
});

db.on("disconnected", () => {
  console.log("Database disconnected.");
});

module.exports = db;
